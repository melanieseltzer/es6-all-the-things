import React from 'react';
import Link from 'gatsby-link';

import Menu from '../components/menu';
import Snippets from '../components/snippets';

const IndexPage = () => (
  <div className="columns">
    <Menu />
    <Snippets />
  </div>
);

export default IndexPage;
