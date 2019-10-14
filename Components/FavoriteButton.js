import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

class FavoriteButton extends React.Component {

    _toggleFavorite = () => {
        const action = { type: 'TOGGLE_FAVORITE', value: this.props.card};
        this.props.dispatch(action);
    }

    render() {
        console.log(this.props.favoritesCards.map(item => item.name));
        return(
            <TouchableOpacity style={styles.main_container} onPress={() => this._toggleFavorite()}>
                <Image source={require('../Icons/round_favorite_border_white_24dp.png')}/>
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
        paddingRight: 15
    },
    image: {
        height: 24,
        width: 24,
    }
})