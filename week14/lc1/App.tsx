import React from 'react';
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import CustomStatusBar from './src/components/StatusBar'

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <StatusBar barStyle='light-content' />
        <CustomStatusBar />
        <RootNavigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
