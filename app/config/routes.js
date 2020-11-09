import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BooksList, Home, BookDetails } from '../screens';
import EStyleSheet from 'react-native-extended-stylesheet';
import { appHeader } from '../styles';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
        title: 'Home', 
    },
  },
  BooksList: {
    screen: BooksList,
    navigationOptions: {
      title: 'BooksList',
    }
  },
  BookDetails: {
    screen: BookDetails,
    navigationOptions: {
      title: 'BookDetails',
    }
  },
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: appHeader.container,
    headerTintColor: EStyleSheet.value('$primaryLight'),
    headerTitleStyle: appHeader.title,
  },
});

export default createAppContainer(AppNavigator);