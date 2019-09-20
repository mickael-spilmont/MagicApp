import React from 'react';
import { Flatlist, StyleSheet, View, Text } from 'react-native';
import { getCardsByDate } from '../Api/ScryfallApi';

export default class Home extends React.Component {

    state = {
        cards: []
    };

    _loadCards() {
        getCardsByDate(1).then(responseJson => {
            this.setState({
                cards: responseJson.data
            });
        });
    }

    render() {
        console.log("Render : Home");
        return(
            <View style={styles.main_container}>
                <Text>Hello !!!!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
});