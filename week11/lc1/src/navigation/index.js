import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import screens from '../screens';

const MyStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false
  },
  screens: {
    Home: screens.Home,
    Details: screens.Details,
    AddTodo: {
      screen: screens.AddTodo,
      options: { headerShown: true, headerTitle: 'Go Back' }
    }
  }
});

export default createStaticNavigation(MyStack);
