import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class BoldText extends Component {
    render() {
        return (
            <Text style={styles.bold}>{this.props.children}</Text>
        );
    }
}

const styles = StyleSheet.create({
    bold: {
      fontWeight: 'bold',
    },
});

export default BoldText;