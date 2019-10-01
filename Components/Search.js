import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';

export default class Search extends React.Component {

    // https://reactnavigation.org/docs/en/headers.html#replacing-the-title-with-a-custom-component
    static navigationOptions = {
        headerTitle: (
            <View>
                <TextInput placeholder='Search' placeholderTextColor='#DDDDDD' />
            </View>
        )
    }

    render() {
        return(
            <View style={styles.main_container}>
                <Text>Hello ! I'am the future search screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header_container: {
        flex: 1,
        flexDirection: 'row'
    },
    search_field: {
        paddingLeft: 10
    },
    main_container: {
        flex: 1
    }
})