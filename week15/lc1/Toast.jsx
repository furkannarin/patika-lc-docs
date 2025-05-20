import React, { useEffect } from 'react';
import { Text, Dimensions, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';

import store from '../state';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const contStyles = {
    bottom: height * 0.15,
    position: 'absolute',
    width: width * 0.95,
    height: 35,
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 4,
    backgroundColor: 'gray',
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
}

const msgStyles = {
    textAlign: 'left',
    textAlignVertical: 'center',
    fontSize: 12,
    fontWeight: '600',
    color: 'white'
}

function Toast() {
    useEffect(() => {
        setTimeout(() => {
            store.setToasterVisibility(false);
        }, store.toastConfig.duration);
    }, [])

    const onPressed = () => {
        store.setToasterVisibility(false);
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPressed} style={contStyles}>
            <Text style={msgStyles}>{store.toastConfig.message}</Text>
            {/* <Text style={{ ...msgStyles, fontFamily: 'SpaceMono-Regular', fontWeight: '200' }}>{store.toastConfig.message}</Text> */}
        </TouchableOpacity>
    );
}

export default observer(Toast);
