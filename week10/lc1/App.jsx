import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, BackHandler, Alert, Keyboard } from 'react-native';

import CustomButton from './src/components/button';
import List from './src/components/list';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DEFAULT_STACK_CONTEXT, DEFAULT_TAB_CONTEXT, STACK_CONTEXT, TAB_CONTEXT } from './src/state';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Screen4({ navigation }) {
  const listData = [ 'Details', 'Settings', 'Login']

  return (
    <React.Fragment>
      <List
        items={listData}
        render={(item, index) => <CustomButton title={item} onPress={() => navigation.navigate(item)} />}
      />
    </React.Fragment>
  );
}

function Screen3({ navigation }) {
  const listData = [ 'Details', 'Settings', 'Login']

  return (
    <React.Fragment>
      <List
        items={listData}
        render={(item, index) => <CustomButton title={item} onPress={() => navigation.navigate(item)} />}
      />
    </React.Fragment>
  );
}

function Screen2({ navigation }) {
  const listData = [ 'Details', 'Settings', 'Login']

  return (
    <React.Fragment>
      <List
        items={listData}
        render={(item, index) => <CustomButton title={item} onPress={() => navigation.navigate(item)} />}
      />
    </React.Fragment>
  );
}

function ShowAlert(id) {
  console.log('alert event id: ', id)
  Alert.alert('emin misiniz', 'emin misiniz x2', [
    {
      style: 'destructive',
      text: 'onayla'
    },
    {
      style: 'cancel',
      text: 'vazgec'
    },
  ])
  return true;
}

let count = 0;

function Screen1({ navigation, isLoggedIn, setIsSettingsNavigable }) {
  const listData = [ 'Details', 'Settings', 'Login']
  const btnTitle = isLoggedIn ? 'Settings Aktif' : 'Settings Inaktif';

  const [ title, setTitle ] = useState(0);

  useEffect(() => {
    const unsub = BackHandler.addEventListener('hardwareBackPress', () => {
      count++;
      ShowAlert(count)
    });

    return () => {
      unsub.remove();
    }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <CustomButton title={'title ' + title} onPress={() => setTitle(p => p + 1)} />
      <List
        items={listData}
        render={(item, index) => {
          return <CustomButton title={item} onPress={() => navigation.navigate(item)} />;
        }}
      />
    </View>
  );
}

function MyStack() {
  const [ isLoggedIn, setIsSettingsNavigable ] = useState(false);

  return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={({ navigation }) => Screen1({ isLoggedIn, setIsSettingsNavigable, navigation })} />
        <Stack.Screen name="Details" component={Screen3} />
        { isLoggedIn && <Stack.Screen name="Settings" component={Screen4} /> }
      </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={MyStack} />
        <Tab.Screen name="Profile" component={Screen2} />
      </Tab.Navigator>
  );
}

function reducer(state, action) {
  switch(action.event) {
    case "inc_age":
      return { ...state, age: state.age + 1};
    case "change_name":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

function App() {
  return (
    <NavigationContainer>
      <STACK_CONTEXT.Provider value={DEFAULT_STACK_CONTEXT}>
        <TAB_CONTEXT.Provider value={DEFAULT_TAB_CONTEXT}>
          <SafeAreaView style={{ flex: 1, top: 15 }}>
            <MyTabs />
          </SafeAreaView>
        </TAB_CONTEXT.Provider>
      </STACK_CONTEXT.Provider>
    </NavigationContainer>
  )
}

export default App;
