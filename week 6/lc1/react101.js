// hiz
// butun program bir javascript object'i

const DOM = {
    renk: 'kirmizi',
    tur: 'meyve'
};

// degisiklikleri hizli bir sekilde bulabiliyor

const VDOM = { ...DOM }; // V-DOM -> VIRTUAL DOM -> DOCUMENT OBJECT MODEL

// JSX -> Javascript XML

const Parent = {
    Children: {
        Text: null,
        List: null,
        // ...
        // ...
        // ...
        // ...
    },
    // configuration,
    // props: {}
}

// syntactic sugar
// angular bracket, opening tag, closing tag

// <div>
// <p>Patika!</p>
// </div>

// <View>
// <Text>Patika!</Text>
// </View>
