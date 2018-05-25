import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import '../styles/index.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Collection of ES6 goodies for next-level dev',
        },
        { name: 'keywords', content: 'javascript, es6, cheat sheet' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />

    <section className="section">
      <div className="container">{children()}</div>
    </section>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
