import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';
import SearchField from './SearchField'

export default class Search extends React.Component {

    // Custom header for stack navigator, with search field
    static navigationOptions = {
        headerTitle: <SearchField/>
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
    main_container: {
        flex: 1
    }
})