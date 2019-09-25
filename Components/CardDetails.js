import React from 'react';
import { View, Text } from 'react-native';

export default class CardDetails extends React.Component {
    
    render() {
        const card = this.props.navigation.getParam('card');
        return(
            <View>
                <Text>{card.name}</Text>
            </View>
        )
    }
}