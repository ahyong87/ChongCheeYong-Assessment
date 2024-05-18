import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  NativeModules,
  Platform,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import _ from 'lodash';
import {NavigationEvents} from 'react-navigation';

import Header from 'components/Header';
import Loader from 'components/Loader';
import Card from 'components/Card';
import {SettingsButton} from 'components/Button';

import Storage from 'utils/Storage';
import Styles from 'utils/Styles';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkEdit: false,
    };
  }
  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <NavigationEvents onDidFocus={this._autoReload} />
        <Header
          title={'Home'}
          LeftComponent={
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <SettingsButton />
            </View>
          }
        />
        

        <View style={{ margin: 20 }}>
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
              onPress={() => this.props.navigation.navigate('Question1')}>
              <Text>Question 1</Text>
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
              onPress={() => this.props.navigation.navigate('Question3')}>
              <Text>Question 3</Text>
            </TouchableOpacity>
        </View>



        {this.props.isLoading && <Loader />}
      </View>
    );
  }
}
