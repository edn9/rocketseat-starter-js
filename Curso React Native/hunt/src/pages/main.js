import React, {Component} from 'react';
import api from '../services/api';

import {View, Text} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt',
  };

  state = {
    counter: 0,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const {docs} = response.data;

    console.log(response.data);
    this.setState({counter: docs.lenght});
  };

  render() {
    return (
      <View>
        <Text>Página Main: {this.state.counter}</Text>
      </View>
    );
  }
}
