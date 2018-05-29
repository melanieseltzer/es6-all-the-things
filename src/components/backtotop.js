import React from 'react';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowUp from '@fortawesome/fontawesome-free-solid/faArrowUp';

fontawesome.library.add(faArrowUp);

const BackToTop = () => {
  const handleBackToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="back-to-top" onClick={ () => handleBackToTop() } onScroll={ () => alert() } >
      <FontAwesomeIcon
        icon="arrow-up"
        size="2x"
      />
    </div>
  );
}
 
export default BackToTop;