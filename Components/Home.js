import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { getCardsByDate } from '../Api/ScryfallApi';
import CardItem from './CardItem';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    // Call Scryfall Api and set cards state with result (Verify the Api response)
    _loadCards() {
        console.log("Load cards");
        getCardsByDate(1).then(responseJson => {
            this.setState({
                cards: responseJson.data // ternaire possibe || [] ?
            });
        });
    }

    // Display list of cardItem, double faced cards are not represented (card_faces !== undefined)
    _displayListOfCards() {
        if (this.state.cards.length > 0) {
            return (
                <FlatList
                    data={this.state.cards}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => !item.card_faces ? <CardItem card={item}/> : null}
                />
            )
        }
    }

    componentDidMount(){
        this._loadCards();
    }

    render() {
        console.log("Render : Home");
        return(
            <View style={styles.main_container}>
                {this._displayListOfCards()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
});