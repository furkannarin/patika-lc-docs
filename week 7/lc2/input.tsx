import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';


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
    width: 300,
    height: 300,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  }),
  icon: {
    width: 300,
    height: 681,
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
      <Image source={{ uri }} style={styles.icon} resizeMode='repeat'  />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

function App(): JSX.Element {
  const [ text, setText ] = useState('');
  // controlled vs. uncontrolled input

  return (
   <View style={{ flex: 1, justifyContent: 'center' }}>
    <TextInput
      style={{ borderWidth: 1, borderRadius: 10, marginHorizontal: 100 }}
      placeholder='isim'
      onBlur={e => console.log(e.nativeEvent)}
    />
    <TextInput
      style={{ borderWidth: 1, borderRadius: 10, marginHorizontal: 100, marginTop: 50, }}
      // onEndEditing={(e) => console.log(e.nativeEvent.text)}
    />
   </View>
  );
}

export default App;
