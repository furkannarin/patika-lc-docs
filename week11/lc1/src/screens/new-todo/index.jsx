import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import store from '../../state';
import components from '../../components';

const { SafeScreen } = components;

const width = Dimensions.get('screen').width;

const DEFAULT_TODO_OBJECT = {
  created: null,
  finished: null,
  title: '',
  description: '',
  status: 'unstarted',
  person: '',
  id: null
}

const people = ['Mom', 'Dad', 'Child'];

function AddTodo() {
  const navigation = useNavigation();
  const [ todo, setTodo ] = useState(DEFAULT_TODO_OBJECT);
  
  const todoFunctions = store(s => s.functions);
  
  const onEndEditing = (e) => {
    setTodo(p => ({ ...p, title: e.nativeEvent.text }))
  }

  const onConfirm = () => {
    const randomIndex = Math.random() * 10;
    todo.created = Date.now();
    todo.id = Date.now();

    if (randomIndex < 4) todo.person = people[0];
    if (randomIndex > 3 && randomIndex < 7) todo.person = people[1];
    else todo.person = people[2];

    // navigation.dispatch(StackActions.popTo('Home', { todo }));
    todoFunctions.addTodo(todo);
    navigation.goBack()
  }

  return (
    <SafeScreen applyTopMargin={false}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 36, marginLeft: 10, marginTop: 5 }}>To Do Details</Text>

        <View style={{ width, marginTop: 10 }}>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>Title</Text>
          <TextInput
            onEndEditing={onEndEditing}
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

        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 50 }}>
          <View style={{ marginHorizontal: 10, borderRadius: 10, width: width * 0.65, alignSelf: 'center' }}>
            <Button title='Confirm' onPress={onConfirm} />
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}

export default AddTodo;
