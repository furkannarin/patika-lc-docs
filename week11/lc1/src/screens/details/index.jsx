import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SafeScreen from '../../components/SafeScreen';

import store from '../../state';

function Details({ route }) {
  const navigation = useNavigation();
  const todos = store(s => s.todos);
  const todoFunctions = store(s => s.functions);

  const todoId = route.params.id;
  const todo = todos.find(t => t.id === todoId);

  console.log('render')

  return (
    <SafeScreen>
      <View activeOpacity={0.9} style={{ backgroundColor: 'orange', height: 100, margin: 10, justifyContent: 'center', borderRadius: 10 }}>
          <Text style={{ color: 'black', marginLeft: 10, fontSize: 36 }}>{todo ? todo.title : 'NOT FOUND'}</Text>
          <Text style={{ color: 'black', marginLeft: 10, fontSize: 36 }}>{todo ? todo.status : 'STATUS UNKNOWN'}</Text>
      </View>
      <View style={{ margin: 10 }}>
        <Button title="finish to-do" onPress={() => todoFunctions.finishTodo(todo.id)} />
      </View>
      <View style={{ margin: 10 }}>
        <Button title="back" onPress={navigation.goBack} />
      </View>
    </SafeScreen>
  );
}

export default Details;
