import React from 'react';
import PropTypes from 'prop-types';

import './comment-entry.css';

/**
 * A comment entry with additional DOM elements right to the cursor
 *
 * @class
 */
class CommentEntry extends React.Component {
  componentDidUpdate(prevProps) {
    /* Turn the focus back onto the textarea after the text has changed so the
     * user can use the backspace key without worry
     */
    if (prevProps.text !== this.props.text) {
      this.textarea.focus();
    }
  }

  render() {
    return (
      <div className="m-comment-entry">
        <textarea
          ref={(textarea) => {
            this.textarea = textarea;
          }}
          className="m-comment-entry__textarea"
          onKeyDown={this.props.onKeyDown}
          value={this.props.text}
          autoFocus />

        <div className="m-comment-entry__entryarea">
          <span className="m-comment-entry__entryarea__override">{this.props.text}</span>
          <div className="m-comment-entry__entryarea__next">{this.props.next}</div>
        </div>
      </div>
    );
  }
}

CommentEntry.propTypes = {
  /**
   * Already typed text
   *
   * @type {string}
   */
  text: PropTypes.string.isRequired,

  /**
   * When the user tries to change the already typed text
   *
   * @type {function}
   */
  onKeyDown: PropTypes.func.isRequired,

  /**
   * Area right to the already typed text, e.g. for word insert buttons
   *
   * @type {node}
   */
  next: PropTypes.node,
};

CommentEntry.defaultProps = {
  onKeyDown: ev => ev.preventDefault(),
};

export default CommentEntry;
