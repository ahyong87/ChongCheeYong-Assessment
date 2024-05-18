import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Image,
} from 'react-native';

import Header from 'components/Header';

import Storage from 'utils/Storage';
import Styles from 'utils/Styles';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // margin: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
export default class Question1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberAmount01: '',
      numberAmount02: '',
      showTotalAmount: '',
    };
  }
  componentDidMount() {}

  addButtonOnClicker = () => {
    

    var numberAmount01ToInt = parseInt(this.state.numberAmount01);

    var numberAmount02ToInt = parseInt(this.state.numberAmount02);

    var tempTotal = numberAmount01ToInt + numberAmount02ToInt;

    this.setState({
      showTotalAmount: tempTotal.toString(),
    });

  }


  render() {
    return (
      <View style={styles.MainContainer}>
        <Header title={'Question 1'} />
        <View style={{ margin: 20 }}>
        <TextInput
                style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
                onChangeText={text => this.setState({numberAmount01: text})}
                value={this.state.numberAmount01}
                keyboardType="number-pad"
                returnKeyType="done"
                placeholder="eg: number"
              />
        <TextInput
                style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
                onChangeText={text => this.setState({numberAmount02: text})}
                value={this.state.numberAmount02}
                keyboardType="number-pad"
                returnKeyType="done"
                placeholder="eg: number"
          />

<TouchableOpacity
              style={{
                width: '100%',
                height: 40,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                marginBottom: 5,
              }}
              onPress={() => this.addButtonOnClicker()}>
              <Text>Submit</Text>
            </TouchableOpacity>

          <Text>{`Total : ${this.state.showTotalAmount}`}</Text>
        </View>


          
      </View>
    );
  }
}
