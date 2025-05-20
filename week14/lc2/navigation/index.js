import screens from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react';

import state from '../state';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  if (!state.isAuthenticated) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register" component={screens.Register} />
        <Stack.Screen name="Login" component={screens.Login} />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={screens.Home} />
      <Stack.Screen
        name="Details" component={screens.Details}
        options={{ headerShown: true, headerTitle: 'Go Back' }}
      />
      <Stack.Screen
        name="AddTodo" component={screens.AddTodo}
        options={{ headerShown: true, headerTitle: 'Go Back' }}
      />
    </Stack.Navigator>
  );
}

export default observer(RootNavigator);