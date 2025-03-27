import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

// default View shrink eder -> icersinde bir sey yoksa, renderlanmaz
// Parent -> Child1, Child2 -> Sibling/Sister Component

function Child() {
  return (
    <React.Fragment>
      <View />
      <View />
    </React.Fragment>
  );
}

function Parent() {
  return (
    <View>
      {/* <CustomButton /> */}
    </View>
  );
}

function App(): JSX.Element {
  return (
    <React.Fragment>
      <TouchableOpacity hitSlop={{ bottom: 50, right: 400 }} activeOpacity={1} onPress={() => console.log('1')}>
        <View style={{ height: 50, width: 100, backgroundColor: 'red' }} />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => console.log('2')}>
        <View style={{ height: 50, width: 100, backgroundColor: 'blue' }} />
      </TouchableWithoutFeedback>
    </React.Fragment>
  );
}

function App(): JSX.Element {
    return (
        <Pressable onPress={() => console.log('yes')} >
        <View style={{ height: 50, width: 100, backgroundColor: 'red' }}>
        </View>
        </Pressable>
    );
}

function App(): JSX.Element {
    const [ adjust, setAdjust ] = useState(false);
    const [ layoutStyle, setStyle ] = useState({ flex: 1 });

    return (
        <View onLayout={e => console.log(e.nativeEvent.layout)} style={layoutStyle}>
        <Text adjustsFontSizeToFit={adjust} style={{ fontSize: 48 }} onPress={() => {
            setAdjust(p => !p);
            setStyle({ width: 50, height: 50 });
        }}>
            Hello World
        </Text>
        </View>
    );
}

export default App;