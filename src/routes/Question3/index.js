import {connect} from 'react-redux';
import {toggleLoading} from 'actions/globalLoading';
import Question3 from './Question3';

const mapStateToProps = ({globalLoading}) => ({
  isLoading: globalLoading.isLoading,
});

const mapActionCreators = {
  toggleLoading,
};

export default connect(mapStateToProps, mapActionCreators)(Question3);
