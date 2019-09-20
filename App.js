import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Home from './Components/Home'

export default function App() {

  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25
  }
});
