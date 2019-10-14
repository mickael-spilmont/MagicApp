import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FavoriteButton from './FavoriteButton';

export default class CardDetails extends React.Component {

    // Custom header for stack navigator, with search field
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: <FavoriteButton card={navigation.getParam('card')}/>
        }
    }

    _displayHeaderFavoriteButton() {
        console.log(this._toggleFavorite);
        return(
            <TouchableOpacity onPress={() => this._toggleFavorite()}>
                <Text>Add favorite</Text>
            </TouchableOpacity>
        )
    }

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

    componentDidMount() {
        this.props.navigation.setParams({
            card: this.props.navigation.getParam('card')
        });
    }
    
    render() {
        const card = this.props.navigation.getParam('card');
        return(
            <View style={styles.main_container}>
                {this._displayCard()}
                {/* <Button title='Toggle Favorite' onPress={() => this._toggleFavorite()}/> */}
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