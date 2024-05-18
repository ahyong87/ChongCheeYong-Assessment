import {connect} from 'react-redux';
import {toggleLoading} from 'actions/globalLoading';
import Question1 from './Question1';

const mapStateToProps = ({globalLoading}) => ({
  isLoading: globalLoading.isLoading,
});

const mapActionCreators = {
  toggleLoading,
};

export default connect(mapStateToProps, mapActionCreators)(Question1);
