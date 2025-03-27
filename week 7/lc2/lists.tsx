import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  ImageSourcePropType,
  Image,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView
} from 'react-native';

// VIRTUALIZED LIST

type Props = {
  title: string
  onPress?: () => void
  color?: string
  disabled?: boolean
  isLoading?: boolean
  icon?: ImageSourcePropType
}

const styles = StyleSheet.create({
  container: (color = 'darkred') => ({
    width: 50,
    height: 50,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    margin: 10,
    flexWrap: 'wrap'
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
  const { isLoading = false, color = 'red', disabled, onPress, title, icon } = props;
  const uri = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  const handlePress = async () => {
    if (onPress) await onPress();
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress} style={styles.container(color)}>
      <Image source={{ uri }} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

function App(): JSX.Element {
  const arr = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];
  return (
    <View>
      {
        arr.map((item, index) => {
          return (
            <View>
              <Text>{item}, {index}</Text>
            </View>
          )
        })
      }
    </View>
  );
}

export default App;
