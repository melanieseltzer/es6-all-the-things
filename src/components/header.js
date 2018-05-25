import React from 'react';
import Link from 'gatsby-link';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faJs from '@fortawesome/fontawesome-free-brands/faJs';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faCode from '@fortawesome/fontawesome-free-solid/faCode';

fontawesome.library.add(faJs, faGithub, faCode);

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
              href="https://github.com/melanieseltzer/es6-all-the-things"
              target="_blank"
              className="button is-primary is-large"
            >
              <span className="icon">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </span>
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
