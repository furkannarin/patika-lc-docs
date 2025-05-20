import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, Animated, PanResponder } from 'react-native';
import { observer } from 'mobx-react';

import components from '../../components';
import state from '../../state';

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

const itemContainerStyle = {
  justifyContent:'center',
  alignItems: 'flex-start',
  width,
  height: 100,
  margin: 10,
  backgroundColor: 'white',
  borderRadius: 10
}

function ListItem({ item, index, removeItem, panResponder, setActivePanIdx }) {
  const pan = useRef(new Animated.Value(0)).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      onPress={() => setActivePanIdx(index)}
      style={[itemContainerStyle, { transform: [{ translateX: pan }]}]}
    >
      <Text style={{ fontSize: 24, textAlign: 'left', left: 10 }}>
        {item.name}
      </Text>
    </Animated.View>
  )
}

const image = 'https://d2zp5xs5cp8zlg.cloudfront.net/image-61785-800.jpg'

let disabledScaling = false;

// const [itemSize, setItemSize] = useState({ width: 0, height: 0 })
function Home() {
  const scale = useRef(new Animated.Value(1)).current;
  const panX = useRef(new Animated.Value(0)).current;
  const panY = useRef(new Animated.Value(0)).current;

  console.log(state.userData);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gs) => {
        const absValue = Math.abs(gs.dx);
        const threshold = 50; // esik

        if (disabledScaling) {
          panX.setValue(gs.dx)
          panY.setValue(gs.dy)
        } else {
          const newScale = absValue / threshold;

          if (newScale > 3) disabledScaling = true;
          scale.setValue(newScale);
        }
      },
      onPanResponderRelease: () => {
        timing(scale, 1, 0.1).start(() => {
          timing(panX, 0, 0.1).start(() => {
            timing(panY, 0, 0.1).start();
            disabledScaling = false;
          })
        })
      }
    }),
  ).current;

  return (
    <SafeScreen>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Animated.Image
            {...panResponder.panHandlers}
            source={{ uri: image }}
            style={{
              width: width * 0.9,
              height: width * 0.9,
              alignSelf: 'center',
              borderRadius: 10,
              transform: [{ scale }, { translateX: panX }, { translateY: panY }]
            }}
          />
        </View>
    </SafeScreen>
  );
}

export default observer(Home);
