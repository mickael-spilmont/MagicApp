import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import CardsList from './CardsList';

class FavoritesCards extends React.Component {

    render() {
        console.log("Favorite card render");
        console.log(this.props.favoritesCards.map((item) => item.name));
        return(
            <View style={styles.main_container}>
                <CardsList cards={this.props.favoritesCards} navigation={this.props.navigation}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favoritesCards: state.favoritesCards
    };
}

export default connect(mapStateToProps)(FavoritesCards);

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
})