

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BoldText from '../BoldText';

class MovieScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
    
        return {
          title: params ? params.title : 'A Nested Details Screen',
        };
      };
    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', {});
        return (
            <View>
                <Text><BoldText>Title:</BoldText> {item.title}</Text>
                <Text><BoldText>Year:</BoldText> {item.year}</Text>
                <Text><BoldText>Rating:</BoldText> {item.rating}</Text>
                <Text><BoldText>Description:</BoldText> {item.description}</Text>
                <Text><BoldText>Genre:</BoldText> {item.genre.join(', ')}</Text>
                <Text><BoldText>Director:</BoldText> {item.director}</Text>
                <Text><BoldText>Actors:</BoldText> {item.actors.join(', ')}</Text>
            </View>
        );
    }
}

export default MovieScreen;