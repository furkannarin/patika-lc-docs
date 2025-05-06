import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Dimensions, Animated } from 'react-native';

import components from '../../components';

const { SafeScreen } = components;

const { height, width } = Dimensions.get('screen');

function timing(animVal, toVal, seconds = 1) {
  return Animated.timing(animVal, {
    useNativeDriver: true,
    toValue: toVal,
    duration: seconds * 1000
  })
}

function skewText(animVal) {
  return animVal.interpolate({
    inputRange: [0, 1],
    outputRange: [45, 90],
    extrapolate: 'clamp'
  })
}

function Home() {
  const ViewPos = useRef(new Animated.Value(0)).current
  const ViewScale = useRef(new Animated.Value(0)).current
  const ViewColor = useRef(new Animated.Value(0)).current
  const TextSkew = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          timing(ViewScale, 1),
          timing(ViewScale, 2),
          timing(ViewScale, 1),
        ]),
        Animated.sequence([
          timing(ViewColor, 1),
          timing(ViewColor, 0),
        ]),
        Animated.sequence([
          timing(ViewPos, width * 0.5),
          timing(ViewPos, 0),
        ]),
        Animated.sequence([
          timing(TextSkew, 0),
          timing(TextSkew, 1),
        ]),
      ])).start()
  }, [])

  function changeColor() {
    return ViewColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['dodgerblue', 'yellow'],
      extrapolate: 'clamp'
    })
  }

  function growAndShrink() {
    return ViewScale.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 2, 0.5],
      extrapolate: 'clamp'
    })
  }

  return (
    <SafeScreen>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={
              [
                {
                  width: 150,
                  backgroundColor: changeColor(),
                  height: 100,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 50,
                  // opacity: ViewOpacity,
                  transform: [{ translateX: ViewPos }, { scale: growAndShrink() }]
                }
              ]
            }
          >
            <Animated.Text
              style={{ color: 'white', fontSize: 36, margin: 10 }}
              >
              Musa
            </Animated.Text>
          </Animated.View>
        </View>
    </SafeScreen>
  );
}

export default Home;
