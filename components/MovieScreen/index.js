

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { TouchableOpacity, View, TextInput, KeyboardAvoidingView, FlatList, Text, AlertIOS } from 'react-native';
import uuid from 'uuid';
import { connect } from 'react-redux';
import CommentItem from '../CommentItem';
import { addComment } from '../../actions';

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
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
                <View style={{flex: 1, padding: 20}}>
                    <FlatList
            data={(this.props.data || [])}
            renderItem={this.renderItem}
        />
        </View>
                    <View style={{backgroundColor: '#eee', position: 'relative'}}>
                        <TextInput
                            style={{height: 40, borderColor: '#6b52ae', borderWidth: 1, borderRadius: 30, margin: 10, paddingLeft: 14, paddingRight: 14, backgroundColor: '#fff'}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder="Write comment"
                        />
                        <TouchableOpacity onPress={this.onPressSubmit} style={{backgroundColor: '#6b52ae', position: 'absolute',
                        right: 10, top: 10, borderRadius: 30, paddingLeft: 25, paddingRight: 25, minWidth: 100, alignItems: 'center'}}><Text style={{color: '#fff', height: 40, lineHeight: 40}}>Submit</Text></TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>
        );
    }
}
const mapStateToProps = (state, props) => {
    const item = props.navigation.getParam('item', {});
    const storedComments = Object.values(state.comments.byMovieIds[item.id]);
    return {
      data: storedComments
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    addComment,
}, dispatch);
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);