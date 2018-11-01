

import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MovieScreen extends Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'Untitled');
    return (
        <View>
          <Text>Movie Screen</Text>
          <Text>{title}</Text>
        </View>
    );
  }
}

export default MovieScreen;