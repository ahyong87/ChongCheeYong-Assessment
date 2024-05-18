import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  Dimensions,
  Platform,
  Alert,
} from 'react-native';
import RNModal from 'react-native-modal';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

import Styles, {COLORS} from 'utils/Styles';
import NavigationService from 'utils/NavigationService';
import Storage from 'utils/Storage';

const getFullHeight = (Dimensions.get('window').height - 650) / 2;

export default class Modal extends React.PureComponent {
  static propTypes = {
    containerStyle: ViewPropTypes.style,
    renderClose: PropTypes.bool,
  };

  static defaultProps = {
    containerStyle: {},
    renderClose: true,
  };

  state = {
    isVisible: false,
    checkReload: 0,
  };

  open = () => {
    this.setState({isVisible: true});
  };

  close = () => {
    this.setState({isVisible: false});
  };

  logoutButtonOnPress = () => {
    this.close();
  };

  render() {
    const {containerStyle, renderClose, profile} = this.props;
    const {isVisible} = this.state;
    return (
      <RNModal
        isVisible={isVisible}
        style={[{margin: 0}, containerStyle]}
        onBackdropPress={renderClose ? this.close : _.noop}
        animationIn="slideInLeft"
        animationOut="slideOutLeft">
        <View
          style={{
            width: '80%',
            height: '100%',
            backgroundColor: 'white',
          }}>
          <ScrollView style={{paddingTop: 100, paddingHorizontal: 10}}>
          <TouchableOpacity
              style={{
                width: '100%',
                height: 60,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                marginBottom: 5,
              }}
              onPress={() => this.logoutButtonOnPress()}>
              <Text>button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 60,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                marginBottom: 5,
              }}
              onPress={() => this.logoutButtonOnPress()}>
              <Text>button 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 60,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                marginBottom: 5,
              }}
              onPress={() => this.logoutButtonOnPress()}>
              <Text>button 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 60,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                marginBottom: 5,
              }}
              onPress={() => this.logoutButtonOnPress()}>
              <Text>button 4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 60,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                marginBottom: 5,
              }}
              onPress={() => this.logoutButtonOnPress()}>
              <Text>button 5</Text>
            </TouchableOpacity>

            <Text style={{marginTop: 30}}>{'Version : 1.0.0'}</Text>
          </ScrollView>
        </View>
      </RNModal>
    );
  }
}
