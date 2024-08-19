import React from 'react';

function Pages() {
  return (
    <React.StrictMode>
      <div id="block_pages">
        <p id="arrow_left"> &#60;</p>
        <p className="number_pages">1</p>
        <p className="number_pages">2</p>
        <p className="number_pages">3</p>
        <p className="number_pages">...</p>
        <p className="number_pages">9</p>
        <p id="arrow_right">&#62;</p>
      </div>
    </React.StrictMode>
  );
}

export default Pages;
