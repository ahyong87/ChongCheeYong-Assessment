import {connect} from 'react-redux';
import {toggleLoading} from 'actions/globalLoading';
import {getContactList, setData, unfriendAction} from 'actions/contact';
import MainScreen from './MainScreen';

const mapStateToProps = ({globalLoading}) => ({
  isLoading: globalLoading.isLoading,
});

const mapActionCreators = {
  toggleLoading,
};

export default connect(mapStateToProps, mapActionCreators)(MainScreen);
