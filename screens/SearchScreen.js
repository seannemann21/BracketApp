import React, {useEffect, useState} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import axios from 'axios';
import BracketList from '../components/BracketList';

export default function SearchScreen(props) {
  const [brackets, setBrackets] = useState([]);
  const {navigation} = props;
  const nextScreen = 'PreviewScreen';

  const getBrackets = () => {
    axios
      .create({
        baseURL: 'http://10.0.2.2:3000/',
      })
      .get('/brackets/')
      .then(resp => {
        console.log(resp.data);
        setBrackets(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBrackets();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: '20%',
      }}>
      <BracketList
        brackets={brackets}
        navigation={navigation}
        nextScreen={nextScreen}
      />
    </View>
  );
}
