import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
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
        this.setState({isLoading: true});

        searchCardByName(text).then((responseJson) => {
            if(responseJson.object !== "error") {
                this.setState({
                    cards: responseJson.data,
                    isLoading: false
                });
            }
        })
    }

    // Display activity indicator while Api doesn't return response
    _displayLoading() {
        if (this.state.isLoading) {
            return(
                <View style={styles.activity_container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ sendSearchRequest: this._sendSearchRequest });
    }

    render() {
        return(
            <View style={styles.main_container}>
                <CardsList cards={this.state.cards} navigation={this.props.navigation}/>
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    activity_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})