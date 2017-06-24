import React from 'react';
import PropTypes from 'prop-types';

import './word.css';

/**
 * A word / tag that can be clicked
 */
const Word = props => (
  <button onClick={props.onClick} className="e-word">{props.value}</button>
);

Word.propTypes = {
  /**
   * Word value
   *
   * @type {string}
   */
  value: PropTypes.string.isRequired,

  /**
   * On click onto the word
   *
   * @type {function}
   */
  onClick: PropTypes.func.isRequired,
};

Word.defaultProps = {
  onClick: ev => ev.preventDefault(),
};

export default Word;
