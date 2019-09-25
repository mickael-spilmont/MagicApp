import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Home from './Components/Home'
import Navigation from './Navigation/Navigation';

export default function App() {

  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
