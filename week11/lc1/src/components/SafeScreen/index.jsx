import { useSafeAreaInsets } from 'react-native-safe-area-context';

import React from 'react';
import { View } from 'react-native';

function SafeScreen(props) {
    const { top, bottom } = useSafeAreaInsets();
    const { children, applyTopMargin = true } = props;
    
  return (
    <View style={{ flex: 1, top: applyTopMargin ? top : 0, bottom }}>
      {children}
    </View>
  );
}

export default SafeScreen;
