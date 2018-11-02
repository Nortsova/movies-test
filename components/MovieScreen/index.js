

import React, { Component } from 'react';
import { TouchableOpacity, View, TextInput, KeyboardAvoidingView, FlatList, Text, AlertIOS } from 'react-native';
import uuid from 'uuid';
import { connect } from 'react-redux';
import CommentItem from '../CommentItem';
import { addComment } from '../../actions';
import styles from './styles';

class MovieScreen extends Component {
    state = {
        text: '',
    }

    renderItem = ({ item }) => (
        <CommentItem item={item} />
      );

    inputSubmit = async (name) => {
        console.log('startSubmit');
        const item = this.props.navigation.getParam('item', {});
        const comment = {
            name,
            comment: this.state.text,
            id: uuid(),
        }
        this.props.addComment({ item, comment });
    }

    onPressSubmit = () => {
        if (this.state.text) {
            AlertIOS.prompt(
                'What is Your name?',
                'Enter your name',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: (name) => this.inputSubmit(name),
                  },
                ],
              );
        }
    }
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
            <KeyboardAvoidingView style={styles.fill} behavior="padding" enabled>
                <View style={styles.commentWrapper}>
                    <FlatList
            data={(this.props.data || [])}
            renderItem={this.renderItem}
        />
        </View>
                    <View style={styles.commentInputWrapper}>
                        <TextInput
                            style={styles.commentInput}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder="Write comment"
                        />
                        <TouchableOpacity onPress={this.onPressSubmit} style={styles.commentSubmit}><Text style={styles.commentSubmitText}>Submit</Text></TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>
        );
    }
}
const mapStateToProps = (state, props) => {
    const item = props.navigation.getParam('item', {});
    const storedComments = Object.values((state.comments.byMovieIds[item.id] || {})).map((item) => ({ key: item.id , ...item }));
    return {
      data: storedComments
    };
};

const mapDispatchToProps = {
    addComment,
};
  export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);