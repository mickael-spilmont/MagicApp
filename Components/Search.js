import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';
import SearchField from './SearchField';
import { searchCardByName } from '../Api/ScryfallApi';
import CardsList from './CardsList';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedText: "",
            cards: [],
            isLoading: false
        };
    }

    // Custom header for stack navigator, with search field
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <SearchField sendSearchRequest={navigation.getParam('sendSearchRequest')}/>
        }
    }

    // Function passed in SearchField component, it launch Api search request with content of textInput
    _sendSearchRequest = (text) => {
        console.log(`Recherche : ${text}`);
        searchCardByName(text).then((responseJson) => {
            if(responseJson.object !== "error") {
                this.setState({cards: responseJson.data});
            }
        })
    }

    componentDidMount() {
        this.props.navigation.setParams({ sendSearchRequest: this._sendSearchRequest });
    }

    render() {
        return(
            <View style={styles.main_container}>
                <CardsList cards={this.state.cards} navigation={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
})