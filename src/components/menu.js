import React, { Component, Fragment } from 'react';
import Link from 'gatsby-link';

import data from '../data';

class Menu extends Component {
  constructor(props) {
    super();
  }

  renderMenu({ slug, title } = menu) {
    return (
      <li key={title}>
        <a href={'#' + slug}>{title}</a>
      </li>
    );
  }

  render() {
    return (
      <Fragment>
        <p className="menu-label">{this.props.category}</p>
        <ul className="menu-list">
          {data
            .filter(menu => menu.category === this.props.category)
            .map(menu => this.renderMenu(menu))}
        </ul>
      </Fragment>
    );
  }
}

export default Menu;
