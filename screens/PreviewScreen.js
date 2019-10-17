import React, {useEffect, useState} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import axios from 'axios';
import Bracket from '../components/Bracket';

export default function SearchScreen(props) {
  const user_id = 1;
  const id = props.navigation.getParam('id');
  const [bracket, setBracket] = useState();
  const [joined, setJoined] = useState(false);

  const getBracket = () => {
    axios
      .create({
        baseURL: 'http://10.0.2.2:3000/',
      })
      .get(`/brackets/${id}`)
      .then(resp => {
        console.log(resp.data);
        setBracket(resp.data);
        if (resp.data.users.find(u => u.id === user_id)) {
          setJoined(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const join = () => {
    axios
      .create({
        baseURL: 'http://10.0.2.2:3000/',
      })
      .post(`/users/${user_id}/brackets`, {
        bracket_id: id,
      })
      .then(() => {
        setJoined(true);
      })
      .catch(function(error) {
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
      {bracket && (
        <>
          <Bracket bracket={bracket} />
          {joined ? (
            <Text>Subscribed</Text>
          ) : (
            <Button title="Join" onPress={join} />
          )}
        </>
      )}
    </View>
  );
}
