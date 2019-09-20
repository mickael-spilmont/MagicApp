import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class CardItem extends React.Component{

    render() {
        const card = this.props.card;
        return(
            <View style={styles.main_container}>
                <Image style={styles.image} source={{uri : card.image_uris.small}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    image: {
        width: 146,
        height: 204
    }
})