import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, Animated, PanResponder, FlatList } from 'react-native';

import components from '../../components';
import axios from 'axios';

const { SafeScreen } = components;

const { height, width } = Dimensions.get('screen');

const SWIPE_THRESHOLD = 100;

function timing(animVal, toVal, seconds = 1) {
  return Animated.timing(animVal, {
    useNativeDriver: true,
    toValue: toVal,
    duration: seconds * 1000
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

function ListItem(props) {
  const { item, panResponder } = props;
  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[itemContainerStyle, { transform: [{ translateX: item.animValue }]}]}
    >
      <Text style={{ fontSize: 24, textAlign: 'left', left: 10 }}>
        {item.name}
      </Text>
    </Animated.View>
  )
}

function Home() {
  const [data, setData] = useState(null)
  const [filtered, setFiltered] = useState(null)

  const animVals = useRef([]).current;

  useEffect(() => {
    // if (!isLoggedIn) {
    //   navigation.navigate('Login')
    //   .reset()
    // }
  }, [])

  function removeItem(idx) {
    setFiltered((prevFiltered) => {
      let newUsers = null;
      setData(p => {
        const preferredData = prevFiltered || p;
        newUsers = preferredData.filter((i, index) => idx !== index);
        return p;
      })

      return newUsers;
    })
  }

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gs) => {
        if (Math.abs(gs.dx) > SWIPE_THRESHOLD) return;

        const activeIdx = Math.floor(gs.moveY / itemContainerStyle.height) - 1;
        animVals[activeIdx].setValue(gs.dx)
      },
      onPanResponderRelease: (_, gs) => {
        if (Math.abs(gs.dx) < SWIPE_THRESHOLD - 1) return;

        const direction = -1 // left: -1, right: 1
        const activeIdx = Math.floor(gs.moveY / itemContainerStyle.height) - 1;

        timing(animVals[activeIdx], width * direction * 2, 0.5)
        .start(() => {
          // removeItem(activeIdx);
        });
      },
    }),
  ).current;

  return (
    <SafeScreen>
        <View style={{ flex: 1 }}>
          {
            (data || filtered) &&
            <FlatList
              data={filtered || data}
              style={{ flex: 1 }}
              renderItem={({ item, index }) => <ListItem item={item} panResponder={panResponder} />}
            />
          }
        </View>
    </SafeScreen>
  );
}

export default Home;
