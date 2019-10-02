import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';
import SearchField from './SearchField'
import searchCardByNAme from '../Api/ScryfallApi'

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    // Custom header for stack navigator, with search field
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <SearchField searchRequest={navigation.getParam('searchRequest')}/>
        }
    }

    _searchRequest = (text) => {
        this.setState({text: text})
    }

    componentDidMount() {
        this.props.navigation.setParams({ searchRequest: this._searchRequest });
    }

    render() {
        return(
            <View style={styles.main_container}>
                <Text>{this.state.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
})