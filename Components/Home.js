import React from 'react';
import { FlatList, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { getCardsByDate } from '../Api/ScryfallApi';
import CardItem from './CardItem';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            isLoading: true
        };
    }

    _goToCardDetails = (card) => {
        this.props.navigation.navigate('CardDetails', {card: card});
    }

    // Call Scryfall Api and set cards state with result, after verify the Api response
    _loadCards() {
        getCardsByDate(1).then(responseJson => {
            
            if (responseJson.object !== "error") {
                this.setState({
                    cards: responseJson.data,
                    isLoading: false
                });
            }
        });
    }

    // Display activity indicator while Api doesn't return response
    _displayLoading() {
        if (this.state.isLoading) {
            return(
                <View style={styles.activity_container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }

    // Display list of cardItem
    _displayListOfCards() {
        if (!this.state.isLoading) {
            return (
                <FlatList
                    data={this.state.cards}
                    keyExtractor={item => item.id.toString()}
                    // Double faced cards are not represented (card_faces !== undefined) improvement required
                    renderItem={({ item }) => !item.card_faces ? <CardItem card={item} goToCardDetails={this._goToCardDetails}/> : null}
                />
            )
        }  
    }

    componentDidMount(){
        this._loadCards();
    }

    render() {
        console.log(this.props.navigation);
        return(
            <View style={styles.main_container}>
                {this._displayListOfCards()}
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    activity_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    error_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    error_text: {
        fontSize: 18,
        fontWeight: "bold"
    }
});