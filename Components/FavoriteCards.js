import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class FavoriteCards extends React.Component {

    render() {
        return(
            <View style={styles.main_container}>
                <Text>Hello ! I'am the future favorite screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
})