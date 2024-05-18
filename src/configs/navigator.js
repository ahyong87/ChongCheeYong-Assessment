import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import EntryPoint from 'routes/EntryPoint';
import MainScreen from 'routes/MainScreen';

import Question1 from '../routes/Question1';
import Question3 from '../routes/Question3';

const AppNavigator = createStackNavigator(
  {
    EntryPoint,
    MainScreen,
    Question1,
    Question3,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
