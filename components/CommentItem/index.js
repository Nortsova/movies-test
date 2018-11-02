import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CommentItem extends Component {
    render() {
        const { name, comment } = this.props.item;
        return (
            <View >
                <Text style={{fontWeight: 'bold', fontSize: 10}}>{name}</Text>
                <Text>{comment}</Text>
            </View>
        );
    }
}

export default CommentItem;