import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import screens from '../screens';

const isLoggedIn = false;

const LoggedInStack = createNativeStackNavigator({
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

const DefaultStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false
  },
  screens: {
    AddTodo: {
      screen: screens.AddTodo,
      options: { headerShown: true, headerTitle: 'Go Back' }
    }
  }
});

export default createStaticNavigation(LoggedInStack);

// export default createStaticNavigation(isLoggedIn ? LoggedInStack : DefaultStack);

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function RootStack() {
//   return (
//     <Stack.Navigator>
//       { isLoggedIn && 
//         <Stack.Screen name="Login" component={HomeScreen} />
//         // <Stack.Screen name="Register" component={HomeScreen} />
//       }
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   const todos = useStore(get => todos.fuctions);
//   return (
//     <NavigationContainer>
//       <RootStack />
//     </NavigationContainer>
//   );
// }