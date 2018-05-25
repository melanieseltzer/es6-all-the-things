import React from 'react';
import Link from 'gatsby-link';
import Prism from 'prismjs';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle';

fontawesome.library.add(faInfoCircle);

const Menu = ({ siteTitle }) => (
  <div className="column is-9">
    <div className="content is-medium">
      <h3 className="title is-3">New Variables</h3>
      <div className="box">
        <h4 id="const" className="title is-3">
          const
        </h4>
        <article className="message is-primary">
          <span className="icon has-text-primary">
            <FontAwesomeIcon icon="info-circle" />
          </span>
          <div className="message-body">
            Block-scoped. Cannot be re-assigned. Not immutable.
          </div>
        </article>
        <pre>
          <code className="language-javascript">const test = 'test';</code>
        </pre>
      </div>

      <div className="box">
        <h4 id="let" className="title is-3">
          let
        </h4>
        <article className="message is-primary">
          <span className="icon has-text-primary">
            <FontAwesomeIcon icon="info-circle" />
          </span>
          <div className="message-body">Block-scoped. Can be re-assigned.</div>
        </article>
        <pre>
          <code className="language-javascript">let i = 0;</code>
        </pre>
      </div>
    </div>
  </div>
);

export default Menu;
