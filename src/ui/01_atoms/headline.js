import React from 'react';
import PropTypes from 'prop-types';

import './headline.css';

/**
 * A simple headline
 */
const Headline = props => (
  <h2 className="a-headline">{props.value}</h2>
);

Headline.propTypes = {
  /**
   * Headline content
   *
   * @type {string}
   */
  value: PropTypes.string.isRequired,
};

export default Headline;
