import { useSafeAreaInsets } from 'react-native-safe-area-context';

import React from 'react';
import { View } from 'react-native';

function SafeScreen(props) {
    const { top } = useSafeAreaInsets();
    const { children } = props;
    
  return (
    <View style={{ height: top, backgroundColor: 'red' }}>
      {children}
    </View>
  );
}

export default SafeScreen;
