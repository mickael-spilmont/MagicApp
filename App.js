import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './Navigation/Navigation';
import { Provider } from 'react-redux';
import Store from './Redux/store';

export default function App() {

  return (
    <Provider store={Store}>
      <Navigation/>
    </Provider>
  );
}
