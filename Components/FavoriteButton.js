import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

export default class FavoriteButton extends React.Component {

    render() {

        return(
            <TouchableOpacity style={styles.main_container} onPress={() => this.props.toggleFavorite()}>
                <Image source={require('../Icons/round_favorite_border_white_24dp.png')}/>
            </TouchableOpacity>
        )
    }
}

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