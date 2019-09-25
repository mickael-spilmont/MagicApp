import React from 'react';
// import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "../Components/Home";

const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Latest Magic cards"
        }
    },
});

export default createAppContainer(HomeStackNavigator);