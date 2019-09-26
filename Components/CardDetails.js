import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';

export default class CardDetails extends React.Component {
    
    render() {
        const card = this.props.navigation.getParam('card');
        return(
            <View style={styles.main_container}>
                <Image style={styles.image} source={{uri: card.image_uris.png}}/>
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
})