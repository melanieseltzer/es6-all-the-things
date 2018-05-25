import React from 'react';
import Link from 'gatsby-link';

import Menu from '../components/menu';
import Snippet from '../components/snippet';

const IndexPage = () => (
  <div className="columns">
    <Menu />
    <div className="column is-9">
      <Snippet category="New Variables" />
    </div>
  </div>
);

export default IndexPage;
