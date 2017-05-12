import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC-f3jyjt2Y1QJRY4AidVcUqOIi2-xtnBk';

// Create a new Component. this component should produce
//some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it 
//on the page(in the DOM)
ReactDOM.render(<App /> , document.querySelector('.container'));