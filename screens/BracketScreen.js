import React, {useEffect, useState} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import axios from 'axios';
import Bracket from '../components/Bracket';

export default function SearchScreen(props) {
  const userId = 1;
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
      })
      .catch(error => {
        console.log(error);
      });
  };

  const advanceRound = () => {
    axios
      .create({
        baseURL: 'http://10.0.2.2:3000/',
      })
      .post(`/brackets/${id}/advance_round`)
      .then(resp => {
        if (resp.data) {
          setBracket(resp.data);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const vote = (matchupId, competitorId) => {
    axios
      .create({
        baseURL: 'http://10.0.2.2:3000/',
      })
      .post(`/votes/`, {
        userId,
        matchupId,
        competitorId,
      })
      .then(resp => {
        if (resp.data) {
          setBracket(resp.data);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

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
          <Bracket bracket={bracket} competitorClickCallback={vote} />
          {<Button title="Advance Round" onPress={advanceRound} />}
        </>
      )}
    </View>
  );
}
