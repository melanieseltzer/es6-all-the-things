import React, { Component } from 'react';
import Link from 'gatsby-link';

import Menu from '../components/menu';
import Snippet from '../components/snippet';

import data from '../data';

// Get the unique categories from the data
// and put them in an array to use for rendering
const categories = [...new Set(data.map(({ category }) => category))];
const uniqueCategories = Array.from(...categories);

class IndexPage extends Component {
  renderElement = (element, category) => {
    if (element === 'Menu') {
      return <Menu key={category} category={category} />;
    } else {
      return <Snippet key={category} category={category} />;
    }
  };

  render() {
    return (
      <div className="columns">
        <div className="column is-3 sticky-menu">
          <aside className="is-medium menu">
            {uniqueCategories.map(menu => this.renderElement('Menu', menu))}
          </aside>
        </div>

        <div className="column is-9">
          {uniqueCategories.map(snippet =>
            this.renderElement('Snippet', snippet)
          )}
        </div>
      </div>
    );
  }
}

export default IndexPage;
