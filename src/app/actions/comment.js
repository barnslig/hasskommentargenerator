import * as types from '../constants/comment';

/**
 * Add word to comment
 *
 * @param {string} word - Word to append to the comment
 * @returns {object} State transition
 */
export const commentAddWord = (word) => ({
  type: types.COMMENT_ADD_WORD,
  word,
});

/**
 * Delete last word from comment
 *
 * @returns {object} State transition
 */
export const commentDelLastWord = () => ({
  type: types.COMMENT_DEL_LAST_WORD,
});

/**
 * Set possible next words
 *
 * @param {[]string} nextWords - Next words which can be appended by the user
 * @returns {object} State transition
 */
export const commentSetNextWords = (nextWords) => ({
  type: types.COMMENT_SET_NEXT_WORDS,
  nextWords,
});
