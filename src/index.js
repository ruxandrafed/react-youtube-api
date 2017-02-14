import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

YTSearch({key: process.env.API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
