import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

class FavoriteButton extends React.Component {

    // Change favorite icon in according to the card is in favorite list (Redux store) or not
    _displayFavoriteIcon() {
        let source = require('../Icons/round_favorite_border_white_24dp.png');

        if(this.props.favoritesCards.findIndex((element) => element.id === this.props.card.id) !== -1) {
            source = require('../Icons/round_favorite_white_24dp.png');
        }

        return <Image style={styles.image} source={source}/>
    }

    // Togle card in favorite in Redux store
    _toggleFavorite = () => {
        const action = { type: 'TOGGLE_FAVORITE', value: this.props.card};
        this.props.dispatch(action);
    }

    render() {
        console.log(this.props.favoritesCards.map(item => item.name));
        return(
            <TouchableOpacity style={styles.main_container} onPress={() => this._toggleFavorite()}>
                {this._displayFavoriteIcon()}
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favoritesCards: state.favoritesCards
    };
}

export default connect(mapStateToProps)(FavoriteButton);

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    image: {
        height: 24,
        width: 24,
        marginRight: 15
    }
})