import React, {useEffect, useState, useContext} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import axios from 'axios';
import BracketList from '../components/BracketList';
import {AuthContext} from '../App';

const getBrackets = (authToken, setBrackets, userId) => {
  axios
    .create({
      baseURL: `http://10.0.2.2:3000/users/${userId}`,
      headers: {Authorization: `Bearer ${authToken}`},
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

export default function SearchScreen(props) {
  const [brackets, setBrackets] = useState([]);
  const {navigation} = props;
  const value = useContext(AuthContext);
  const authToken = value.userToken;
  const userId = 1;
  const nextScreen = 'BracketScreen';

  useEffect(() => {
    getBrackets(authToken, setBrackets, userId);
  }, [authToken, setBrackets, userId]);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: '20%',
      }}>
      <BracketList brackets={brackets} navigation={navigation} nextScreen={nextScreen} />
    </View>
  );
}
