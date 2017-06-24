import { connect } from 'react-redux';

import { commentAddWord } from '../../actions/comment';

import Word from '../../../ui/01_atoms/word';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (ev) => {
    ev.preventDefault();
    dispatch(commentAddWord(ownProps.value));
  },
});

export default connect(null, mapDispatchToProps)(Word);
