import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp);

const BackToTop = () => {
  const handleBackToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="back-to-top" onClick={() => handleBackToTop()}>
      <FontAwesomeIcon icon="arrow-up" size="2x" />
    </div>
  );
};

export default BackToTop;
