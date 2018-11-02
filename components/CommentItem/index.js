import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

class CommentItem extends Component {
  render() {
    const { name, comment } = this.props.item;
    return (
      <View style={styles.commentBlock}>
        <Text style={styles.userName}>{name}:</Text>
        <View style={styles.comment}>
          <Text style={styles.commentRadius}>{comment}</Text>
        </View>
      </View>
    );
  }
}

export default CommentItem;
