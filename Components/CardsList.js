import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import CardItem from './CardItem';

export default class CardsList extends React.Component {

    // Call react-navigation CardDetails screen
    _goToCardDetails = (card) => {
        this.props.navigation.navigate('CardDetails', {card: card});
    }

    // Return CardItem component if item is not udefined, and card have image uris and card is not double faced
    _displayItem(item) {
        if(item && item.image_uris && !item.card_faces) {
            return <CardItem card={item} goToCardDetails={this._goToCardDetails}/>
        }
    }

    render() {
        console.log("CardsList Component !!!");
        return(
            <FlatList
                data={this.props.cards}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => this._displayItem(item)}
            />
        )
    }
}