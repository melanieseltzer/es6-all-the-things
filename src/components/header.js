import React from 'react';
import Link from 'gatsby-link';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

library.add(faJs, faCode);

const Header = ({ siteTitle }) => (
  <section className="hero is-medium is-primary">
    <div className="hero-body">
      <div className="columns">
        <div className="column is-12">
          <div className="container content">
            <FontAwesomeIcon icon={['fab', 'js']} />
            <FontAwesomeIcon icon="code" />
            <h1 className="title">
              ES6 <em>All</em> The Things
            </h1>
            <h3 className="subtitle">
              Collection of ES6 goodies for next-level dev 🤓💻
            </h3>
            <a
              className="github-button"
              href="https://github.com/melanieseltzer"
              data-size="large"
              aria-label="Follow @melanieseltzer on GitHub"
            >
              Follow
            </a>{' '}
            &nbsp;
            <a
              className="github-button"
              href="https://github.com/melanieseltzer/es6-all-the-things"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="false"
              aria-label="Star melanieseltzer/es6-all-the-things on GitHub"
            >
              Star
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
