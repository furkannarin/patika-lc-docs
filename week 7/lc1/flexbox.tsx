import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

// default View shrink eder -> icersinde bir sey yoksa, renderlanmaz

// Parent -> Child1, Child2 -> Sibling/Sister Component
// Reusability
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {},
  title: {},
});

const Flex = ({ isRelative }) => {
  const style: ViewStyle = {
    flex: 0.25,
    borderRadius: 10,
    borderWidth: 3,
    flexDirection: 'column',
    backgroundColor: 'pink',
    padding: 10,
    margin: 10,
    position: isRelative ? 'relative' : 'absolute',
    elevation: 15,
    shadowColor: 'black',
    shadowOffset: { width: -100, height: -100 },
    shadowOpacity: 1,
    zIndex: 1,
    left: 10,
    bottom: 10
  }

  return (
    <View style={style}>
      <View style={{ width: 50, height: 50, backgroundColor: 'red'}} />
      <View style={{ width: 50, height: 50, backgroundColor: 'darkorange'}} />
      <View style={{ width: 50, height: 50, backgroundColor: 'green'}} />
    </View>
  );
};

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Flex />
      <Flex isRelative />
    </React.Fragment>
  );
}

export default App;
