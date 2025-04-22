import { createContext } from "react";

// context: baglam

export const DEFAULT_STACK_CONTEXT = {
    age: 25,
}

export const DEFAULT_TAB_CONTEXT = {
    name: 'berkay'
}

export const STACK_CONTEXT = createContext(DEFAULT_STACK_CONTEXT);
export const TAB_CONTEXT = createContext(DEFAULT_TAB_CONTEXT);
