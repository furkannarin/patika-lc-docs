import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { observer } from 'mobx-react';

import components from '../../components';
import api from '../../api';

import state from '../../state';

const { SafeScreen } = components;

const width = Dimensions.get('screen').width;

function Register() {
    const navigation = useNavigation();
    const { bottom } = useSafeAreaInsets();
    const [ credentials, setCredentials ] = useState({ email: 'test@patika.dev', password: '123456', city: 'Istanbul' });

    const onRegister = async () => {
      const result = await api.register(credentials.email, credentials.password, credentials.city);
      if (!result) {
        state.setToasterDuration(10)
        state.setToasterMessage('Tekrar deneyiniz!');
        state.setToasterVisibility(true);
        return;
      }

      state.isAuthenticated = true;
    }

  return (
    <SafeScreen>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.9, width, marginTop: 10, justifyContent: 'center' }}>
            <Text style={{ fontSize: 36, bottom: 20, alignSelf: 'center' }}>Register</Text>
            <TextInput
              placeholder='email'
              onEndEditing={e => setCredentials(p => ({ ...p, email: e.nativeEvent.text }))}
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
            <TextInput
              placeholder='password'
              onEndEditing={e => setCredentials(p => ({ ...p, password: e.nativeEvent.text }))}
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
            <TextInput
              placeholder='city'
              onEndEditing={e => setCredentials(p => ({ ...p, city: e.nativeEvent.text }))}
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

        <View style={{ flex: 0.1, justifyContent: 'center', marginBottom: bottom + 50 }}>
          <View style={{ marginHorizontal: 10, borderRadius: 10, width: width * 0.65, alignSelf: 'center' }}>
            <Button title='Sign Up' onPress={onRegister} />
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}

export default observer(Register);
