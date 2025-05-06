import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Dimensions, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import components from '../../components';

import store from '../../state';

import { storage, KEYS } from '../../utils';

const { SafeScreen } = components;

const { width } = Dimensions.get('screen');

function ListItem(item, navigation) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { id: item.id })}
      activeOpacity={0.9}
      style={{ backgroundColor: 'orange', height: 50, margin: 10, justifyContent: 'center', borderRadius: 10 }}
    >
      <View style={{ marginLeft: 10 }}>
        <Text style={{ color: 'black' }}>{item.title}</Text>
        <Text style={{ color: 'black' }}>{item.completed}</Text>
      </View>
    </TouchableOpacity>
  )
}

function Home() {
  const navigation = useNavigation();
  const stateFunctions = store(s => s.functions);

  const [ visibleItemCount, setVisibleItemCount ] = useState(10);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      setTimeout(() => {}, 2000);
      await todoFunctions.fetchTodos();
      setLoading(false);
    })()
  }, [])


  const todos = store(s => s.todos);

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

  return (
    <SafeScreen>
      { loading && <ActivityIndicator /> }
      { !loading && (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.35 }}>
            <Text style={{ fontSize: 36, marginLeft: 10, textAlign: 'center' }}>To Do's</Text>
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

          </View>
            <View style={{ flex: 0.58 }}>
              <FlatList
                data={todos.filter((t, idx) => idx < 15)}
                renderItem={({ item, index }) => ListItem(item, index, navigation)}
              />
            </View>
        </View>
      )}
    </SafeScreen>
  );
}

export default Home;
