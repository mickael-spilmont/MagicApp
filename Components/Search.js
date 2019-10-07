import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';
import SearchField from './SearchField'
import searchCardByName from '../Api/ScryfallApi'

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cards: []};
    }

    // Custom header for stack navigator, with search field
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <SearchField searchRequest={navigation.getParam('searchRequest')}/>
        }
    }

    _searchRequest = (text) => {
        searchCardByName(text).then((responseJson) => {
            
            if(responseJson.object !== "error") {
                this.setState({ cards: responseJson.data });
            }
        });
    }

    componentDidMount() {
        this.props.navigation.setParams({ searchRequest: this._searchRequest });
    }

    render() {
        return(
            <View style={styles.main_container}>
                <Text>{this.state.cards[0].name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
})