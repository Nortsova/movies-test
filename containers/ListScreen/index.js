import React, { Component } from "react";
import { TouchableOpacity, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

class MoviesList extends Component {
  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        this.props.navigation.navigate("Movie", { title: item.title, item })
      }
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
  render() {
    const { data } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={data}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => {
  let storedMovies = state.movies.allIds.map(ids => ({
    key: ids,
    ...state.movies.byIds[ids]
  }));

  return {
    data: storedMovies
  };
};

export default connect(mapStateToProps)(MoviesList);
