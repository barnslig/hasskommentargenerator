import React from 'react';
import PropTypes from 'prop-types';

import './hate-commenter.css';

/**
 * A hate commenter
 */
const HateCommenter = props => (
  <div className="o-hate-commenter">{props.children}</div>
);

HateCommenter.propTypes = {
  /**
   * Content of the hate commenter
   *
   * @type {React.Node}
   */
  children: PropTypes.node,
};

export default HateCommenter;
