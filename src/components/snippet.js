import React, { Component } from 'react';
import Link from 'gatsby-link';
import Prism from 'prismjs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import data from '../data';

library.add(faInfoCircle);

class Snippet extends Component {
  constructor(props) {
    super();
  }
  renderSnippet({ title, slug, info, code }) {
    return (
      <div className="box" key={title}>
        <h4 id={slug} className="title is-4">
          {title}
        </h4>
        <article className="message is-warning">
          <span className="icon has-text-warning">
            <FontAwesomeIcon icon="info-circle" />
          </span>
          <div
            className="message-body"
            dangerouslySetInnerHTML={{ __html: info }}
          />
        </article>
        <pre>
          <code className="language-javascript">{code}</code>
        </pre>
      </div>
    );
  }

  render() {
    return (
      <div className="content is-medium">
        <h3 className="title is-3">{this.props.category}</h3>
        {data
          .filter(snippet => snippet.category === this.props.category)
          .map(snippet => this.renderSnippet(snippet))}
      </div>
    );
  }
}

export default Snippet;
