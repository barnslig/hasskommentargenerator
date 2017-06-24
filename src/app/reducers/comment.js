import sampleSize from 'lodash.samplesize';

import * as types from '../constants/comment';

const initialState = {
  /**
   * Dictionary
   *
   * @type {object}
   */
  dictionary: {},

  /**
   * Possible next words based on the previous word
   *
   * @type {[]string}
   */
  nextWords: [],

  /**
   * Already typed words
   *
   * @type {[]string}
   */
  words: [],
};

const comment = (state = initialState, action) => {
  switch (action.type) {
    case types.COMMENT_ADD_WORD: {
      const nextWords = sampleSize(Object.keys(state.dictionary.words[action.word]), 3)

      return {
        ...state,
        nextWords,
        words: [...state.words, action.word],
      };
    }

    case types.COMMENT_DEL_LAST_WORD: {
      const words = state.words.slice(0, -1);

      const nextWords = words.length > 0
        ? sampleSize(Object.keys(state.dictionary.words[words.slice(-1)[0]]))
        : sampleSize(state.dictionary.startWords, 3);

      return {
        ...state,
        nextWords,
        words,
      };
    }

    case types.COMMENT_SET_DICTIONARY: {
      return {
        ...state,
        dictionary: action.dictionary,
      };
    }

    case types.COMMENT_SET_NEXT_WORDS: {
      return {
        ...state,
        nextWords: action.nextWords,
      };
    }

    default: {
      return state;
    }
  }
};

export default comment;
