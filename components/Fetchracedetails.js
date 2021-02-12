import React from 'react';

import { View, Text, FlatList, TouchableHighlight } from 'react-native';

class Fetchrace extends React.Component {
  constructor() {
    super();
    this.state = {
      Data: [],
    };
  }
  componentDidMount() {
    getMoviesFromApiAsync(this);
  }

  render() {
    return (
      <View>
        <FlatList
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({ highlighted }) => (
              <View
                style={[style.separator, highlighted && { marginLeft: 0 }]}
              />
            ))
          }
          data={this.state.Data.movies}
          renderItem={({ item, index, separators }) => <Item item={item[0]} />}
        />
      </View>
    );
  }
}

const getMoviesFromApiAsync = async (data) => {
  try {
    let response = await fetch('https://reactnative.dev/movies.json');
    let json = await response.json();
    console.warn(json);
    data.setState({
      Data: json.movies,
    });
    return json.movies;
  } catch (error) {
    console.warn(error);
  }
};
const Item = ({ item }) => (
  <View>
    <Text>{item.id}</Text>
  </View>
);

const renderItem = ({ item }) => <Item title={item.title} />;

export default Fetchrace;
