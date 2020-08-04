import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home } from '../screens';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
        header: () => null,
    },
  },
});

export default createAppContainer(AppNavigator);