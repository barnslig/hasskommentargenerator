import React from 'react';
import { connect } from 'react-redux';

import { commentDelLastWord } from '../../actions/comment';

import Word from '../01_atoms/word';

import CommentEntry from '../../../ui/02_molecules/comment-entry';

const mapStateToProps = state => ({
  text: state.comment.words.join(' '),

  next: state.comment.nextWords.map(word => <Word key={word} value={word} />),
});

const mapDispatchToProps = dispatch => ({
  onKeyDown: (ev) => {
    ev.preventDefault();

    // on backspace delete last word
    if (ev.keyCode === 8) {
      dispatch(commentDelLastWord());
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentEntry);
