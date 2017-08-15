import {
  StackNavigator,
} from 'react-navigation';

const BasicApp = StackNavigator({
  Main: {screen: App},
  Profile: {screen: ProfileScreen},
});
