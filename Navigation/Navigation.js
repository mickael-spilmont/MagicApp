import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../Components/Home';
import CardDetails from '../Components/CardDetails';
import Search from '../Components/Search';

const HomeStackNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: "Latest Magic cards",
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

const SearchStackNavigator = createStackNavigator(
    {
        Search: {
            screen: Search,
        }
    }
)

const AppTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image source={require('../Icons/home_black_36dp.png')} style={styles.menu_icon}/>
                }
            }
        },
        Search: {
            screen: SearchStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image source={require('../Icons/search_black_36dp.png')} style={styles.menu_icon}/>
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: false,
            shoIcon: true,
        },
    }
)

const styles = StyleSheet.create({
    menu_icon: {
        width: 36,
        height: 36,
    }
})

export default createAppContainer(AppTabNavigator);