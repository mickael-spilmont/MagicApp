import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../Components/Home';
import CardDetails from '../Components/CardDetails';
import FavoriteCards from '../Components/FavoriteCards';
// import { TouchableOpacity } from 'react-native-gesture-handler';
console.log(styles);

const HomeStackNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: "Latest Magic cards",
                headerLeft: (
                    <Image
                        source={require('../Icons/menu-24px.svg')} style={{width: 24, height: 24}}
                    //    style={styles.menu_icon}
                    />
                )
            }
        },
        CardDetails: {
            screen: CardDetails,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#2a2b2b',
                    // remove shadow for Android and IOS
                    elevation: 0,
                    borderBottomWidth: 0,
                },
                headerTintColor: '#ffffff',
            }
        }
    }
);

const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeStackNavigator,
        },
        Favorite: {
            screen: FavoriteCards
        }
    }
)

const styles = StyleSheet.create({
    menu_icon: {
        width: 24,
        height: 24,
    }
})

console.log(styles);

export default createAppContainer(AppDrawerNavigator);