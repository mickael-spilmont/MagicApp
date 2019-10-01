import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';

export default class CardDetails extends React.Component {

    // Verify if card uris exist and display card
    _displayCard() {
        const card = this.props.navigation.getParam('card');

        if(card.image_uris && card.image_uris.png) {
            return <Image style={styles.image} source={{uri: card.image_uris.png}}/>
        }
        else {
            return <Text style={styles.missing_text}>Missing Image</Text>
        }
    }
    
    render() {
        const card = this.props.navigation.getParam('card');
        return(
            <View style={styles.main_container}>
                {this._displayCard()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#2a2b2b',
    },
    image: {
        height: '100%',
        resizeMode: 'contain',
        margin: 5,
    },
    missing_text: {
        flex: 1,
        fontSize: 24,
        color: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})