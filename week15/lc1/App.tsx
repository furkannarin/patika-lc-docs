import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { observer } from 'mobx-react';

import components from './src/components';
import state from './src/state';

const { Toast } = components;

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        { state.toastConfig.isVisible && <Toast /> }
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default observer(App);
