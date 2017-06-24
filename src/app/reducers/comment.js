import * as types from '../constants/comment';

const initialState = {
  /**
   * Possible next words based on the previous word
   *
   * @type {[]string}
   */
  nextWords: ['du', 'huan', 'was'],

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
      return {
        ...state,
        words: [...state.words, action.word],
      };
    }

    case types.COMMENT_DEL_LAST_WORD: {
      return {
        ...state,
        words: state.words.slice(0, -1),
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
