import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Button, Dimensions, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import components from '../../components';

import store from '../../state';

import { storage, KEYS } from '../../utils';

const { SafeScreen } = components;

const { width } = Dimensions.get('screen');

function Home() {
  const navigation = useNavigation();
  const stateFunctions = store(s => s.functions);
  const currentLanguage = store(s => s.todos.current);
  const helloWorldText = store(s => s.todos.locales[s.todos.current]['hello'])

  const [ visibleItemCount, setVisibleItemCount ] = useState(10);
  const [ isScrollEnabled, setScrollEnabled ] = useState(false);
  const [ iban, setIban ] = useState('TR ');
  
  const scrollRef = useRef()
  console.log(Keyboard.metrics())

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setScrollEnabled(true)
    });
  
    Keyboard.addListener('keyboardDidHide', () => {
      setScrollEnabled(false)
      scrollRef.current.scrollTo({ y: 0, x: 0 })
    });
  }, [])


  const onEndEditing = (e) => {
    const value = Number(e.nativeEvent.text);
    if (typeof value != 'number' && value !== NaN) return;

    setVisibleItemCount(value)
  }

  const goToAdd = () => {
    navigation.navigate('AddTodo')
  }

  const saveData = () => {
    storage.save(KEYS.EMAIL, 'asdfasd@patika.dev')
  }

  const getData = async () => {
    const r = await storage.get(KEYS.EMAIL)
    console.log(r);
  }

  const changeLanguage = () => {
    stateFunctions.changeLanguage('en')
  }

  const onTyped = (t) => {
    if (t.length < 3) return;

    let newIban = t;

    const newTextLength = t.replaceAll(' ', '').length - 2;
    const currTextLength = iban.replaceAll(' ', '').length - 2;

    if (currTextLength < newTextLength) {
      if (newTextLength % 4 === 0) newIban += ' ';
    }

    setIban(newIban)
  }

  return (
    <SafeScreen>
      <KeyboardAvoidingView style={{ flex: 1, paddingBottom: isScrollEnabled ? 268 * 1.5 : 0 }} >
        <ScrollView ref={scrollRef} scrollEnabled={isScrollEnabled} >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.35 }}>
            <Text style={{ fontSize: 36, marginLeft: 10, textAlign: 'center' }}>{helloWorldText}</Text>
            <View style={{ marginHorizontal: 10, borderRadius: 10, marginVertical: 20, width: width * 0.65, alignSelf: 'center' }}>
              <Button title='Add To Do' onPress={goToAdd} />
            </View>
            <View style={{ marginHorizontal: 10, borderRadius: 10, marginVertical: 20, width: width * 0.65, alignSelf: 'center', backgroundColor: 'red' }}>
              <Button title='Geri git' onPress={() => navigation.goBack()} />
            </View>
            
            <View style={{ width, marginTop: 10 }}>
              <Text style={{ fontSize: 18, textAlign: 'center' }}>Currently Visible: {visibleItemCount}</Text>
              <TextInput
                defaultValue={visibleItemCount}
                onEndEditing={onEndEditing}
                keyboardType='number-pad'
                style={{
                  marginTop: 5,
                  width: width * 0.6,
                  borderWidth: 1,
                  borderRadius: 6,
                  color: 'black',
                  backgroundColor: 'lightgray',
                  alignSelf: 'center'
                }}
              />
            </View>

            <View style={{ width, marginTop: 10 }}>
              <TextInput
                value={iban}
                defaultValue={iban}
                onChangeText={onTyped}
                keyboardType='number-pad'
                maxLength={32}
                style={{
                  marginTop: 5,
                  width: width * 0.6,
                  borderWidth: 1,
                  borderRadius: 6,
                  color: 'black',
                  backgroundColor: 'lightgray',
                  alignSelf: 'center'
                }}
              />
            </View>

            <View style={{ marginHorizontal: 10, borderRadius: 10, marginVertical: 20, width: width * 0.65, alignSelf: 'center', backgroundColor: 'red' }}>
              <Button title='1' onPress={changeLanguage} />
            </View>

            <View style={{ marginHorizontal: 10, borderRadius: 10, marginVertical: 20, width: width * 0.65, alignSelf: 'center' }}>
              <Button title='2' onPress={saveData} />
            </View>
            <View style={{ marginHorizontal: 10, borderRadius: 10, marginVertical: 20, width: width * 0.65, alignSelf: 'center', backgroundColor: 'red' }}>
              <Button title='3' onPress={getData} />
            </View>

            <View style={{ marginHorizontal: 10, borderRadius: 10, marginVertical: 20, width: width * 0.65, alignSelf: 'center', backgroundColor: 'red' }}>
              <Button title='4' onPress={changeLanguage} />
            </View>

            <View style={{ marginHorizontal: 10, borderRadius: 10, marginVertical: 20, width: width * 0.65, alignSelf: 'center' }}>
              <Button title='5' onPress={saveData} />
            </View>

          </View>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
}

export default Home;
