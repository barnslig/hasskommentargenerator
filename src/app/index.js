import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import sampleSize from 'lodash.samplesize';

import reducers from './reducers';

import { commentSetDictionary, commentSetNextWords } from './actions/comment';

import Headline from '../ui/01_atoms/headline';
import CommentEntry from './components/02_molecules/comment-entry';
import HateCommenter from '../ui/03_organisms/hate-commenter';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// load the dictionary
const dict = require('../dictionary.json');
store.dispatch(commentSetDictionary(dict));
store.dispatch(commentSetNextWords(sampleSize(dict.startWords, 3)));

const App = () => (
  <Provider store={store}>
    <HateCommenter>
      <Headline value="Dein Kommentar:" />
      <CommentEntry />
    </HateCommenter>
  </Provider>
);

export default App;
