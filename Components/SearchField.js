import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';

// SearchField integrated in header stack navigator of Search component
export default class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        console.log(this.props);
        return(
            <View style={styles.main_container}>
                <TextInput
                    style={styles.search_field}
                    placeholder='Search'
                    placeholderTextColor='#dddddd'
                    onChangeText={(text) => this.setState({text: text})}
                    onSubmitEditing={() => this.props.searchRequest(this.state.text)}
                />
                <TouchableOpacity style={styles.button_container}>
                    <Image source={require('../Icons/search_black_36dp.png')} style={styles.search_image} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'row'
    },
    search_field: {
        flex: 1,
        marginLeft: 20,
        marginRight: 15,
        borderBottomWidth: 1,
        borderColor: '#525954'
    },
    button_container: {
        marginRight: 20
    },
    search_image: {
        width: 24,
        height: 24
    }
})