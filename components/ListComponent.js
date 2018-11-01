import React, { Component } from 'react';
import { TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class MoviesList extends Component {
  renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Movie', {title: item.title})}>
      <Text >{item.title}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  let storedMovies = state.movies.map((repo, index) => ({ key: `${repo.year}${repo.title}${index}` , ...repo }));

  return {
    data: storedMovies
  };
};


export default connect(mapStateToProps)(MoviesList);