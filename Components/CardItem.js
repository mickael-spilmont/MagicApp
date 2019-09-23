import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class CardItem extends React.Component{

    // If card has power and toughness return this score
    _stats(card) {
        if (card.power && card.toughness) {
            return(
                <Text style={styles.power_text}>{card.power}/{card.toughness}</Text>
            )
        }
    }

    render() {
        // Verify if card is not null
        const card = this.props.card;
        return(
            <View style={styles.main_container}>
                <Image style={styles.image} source={{uri : card.image_uris.small}} />
                <View style={styles.data_container}>

                    <View style={styles.header_container}>
                        <Text style={styles.name_text}>{card.name}</Text>
                        <Text>{card.mana_cost}</Text>
                    </View>

                    <View style={styles.description_container}>
                        <Text style={styles.type_text}>{card.type_line}</Text>
                        {/* if card hasn't power score, allows more oracle text  */}
                        <Text style={styles.oracle_text} numberOfLines={card.power ? 6 : 8}>{card.oracle_text}</Text>
                    </View>
                    
                    {/* show stats if necessary */}
                    {this._stats(card)}
                
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 214,
        flexDirection: "row"
    },
    image: {
        width: 146,
        height: 204,
        margin : 5
    },
    data_container: {
        flex: 1,
        flexDirection: "column",
        alignContent: "stretch",
        margin: 5
    },
    header_container: {
        flexDirection: "row"
    },
    name_text: {
        fontWeight: "bold",
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
        paddingBottom: 5
    },
    description_container: {
        flex: 1
    },
    type_text: {
        fontWeight: "bold",
        fontSize: 14,
        paddingBottom: 3
    },
    oracle_text: {
        fontSize: 12
    },
    power_text: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "right"
    }
})