import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ViewStyle, ImageSourcePropType, Image, StyleSheet } from 'react-native';

// default View shrink eder -> icersinde bir sey yoksa, renderlanmaz

// Parent -> Child1, Child2 -> Sibling/Sister Component
// Reusability
 
type Props = {
  title: string
  onPress?: () => void
  color?: string
  disabled?: boolean
  isLoading?: boolean
  icon?: ImageSourcePropType
}

// uri -> universal resource identificator

const styles = StyleSheet.create({
  container: (color = 'darkred') => ({
    width: 300,
    height: 50,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  }),
  icon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginRight: 5
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white'
  },
});



function CustomButton(props: Props) {
  const { isLoading, color = 'red', disabled, onPress, title, icon } = props;
  const uri = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  const handlePress = () => {
    if (onPress) onPress();
    // button'a tiklandi
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress} style={styles.container(color)}>
      <Image source={{ uri }} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

function App(): JSX.Element {
  return (
    <View style={{ flex: 1, margin: 10, justifyContent: 'space-evenly', }}>
      <CustomButton color="pink" title="Click Me" />
      <CustomButton color="blue" title="Click Me" />
      <CustomButton color="orange" title="Click Me" />
      <CustomButton color="green" title="Click Me" />
      <CustomButton title="Click Me" />
    </View>
  );
}

export default App;
