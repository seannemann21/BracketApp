import React, {useEffect, useState} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import axios from 'axios';
import Bracket from '../components/Bracket';

export default function SearchScreen(props) {
  const id = props.navigation.getParam('id');
  const [bracket, setBracket] = useState();

  const getBracket = () => {
    axios
      .create({
        baseURL: 'http://10.0.2.2:3000/',
      })
      .get(`/brackets/${id}`)
      .then(resp => {
        console.log(resp.data);
        setBracket(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBracket();
  }, []);

  return (
    <View
      style={{
        height: '100%',
      }}>
      {bracket && <Bracket bracket={bracket} />}
      <Button title="Preview" />
    </View>
  );
}
