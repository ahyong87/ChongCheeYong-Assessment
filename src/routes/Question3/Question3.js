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
  Button,
} from 'react-native';

import Header from 'components/Header';

import Storage from 'utils/Storage';
import Styles from 'utils/Styles';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
export default class Question3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: '',
      target: '',
      result: null,
    };
  }
  componentDidMount() {}

  handleFindIndices = () => {
    const nums = this.state.numbers.split(',').map(Number);
    const targetNum = parseInt(this.state.target);
    const indices = this.twoSumII(nums, targetNum);
    this.setState({ result: indices });
  };

  twoSumII = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === target) {
        return [left + 1, right + 1]; // 1-indexed
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  };


  render() {
    return (
      <View style={styles.MainContainer}>
        <Header title={'Question 3'} />
        <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    }}>Two Sum II - Input Array Is Sorted</Text>

        <TextInput
          style={{     height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 8 }}
          placeholder="Enter sorted numbers (comma-separated)"
          value={this.state.numbers}
          onChangeText={(text) => this.setState({ numbers: text })}
          keyboardType="numeric"
        />
        <TextInput
          style={{     height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 8 }}
          placeholder="Enter target number"
          value={this.state.target}
          onChangeText={(text) => this.setState({ target: text })}
          keyboardType="numeric"
        />
        <Button title="Find Indices" onPress={this.handleFindIndices} />
        {this.state.result && (
          <View style={{ marginTop: 20,
            alignItems: 'center',}}>
            <Text>Indices: [{this.state.result.join(', ')}]</Text>
          </View>
        )}
        </View>



      </View>
    );
  }
}
