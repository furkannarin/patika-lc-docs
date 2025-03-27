import React, { useState } from 'react';

export const useLocalStorage = (initial) => {
    const [value, setValue] = useState(initial);

    const getValueFromLocalStorage = () => {
        return value;
    }

    const updateValue = (newValue) => {
        setValue(p => p + newValue);
    }

    return { getValueFromLocalStorage, updateValue };
}

export default useLocalStorage; // stateful vs. normal function -> stateless
