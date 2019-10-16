import React from 'react';
import {FlatList, View, Text} from 'react-native';
import Matchup from './Matchup';

export default function Round(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={props.matchups}
        renderItem={item => {
        return(
        <View style={{paddingTop: 20, paddingBottom: 20}}>
          <Matchup {...item.item} />
        </View>
  )}}
      />
    </View>
  );
}
