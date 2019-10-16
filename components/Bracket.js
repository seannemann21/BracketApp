import React from 'react';
import {FlatList, View, Text} from 'react-native';
import Round from './Round';

export default function Bracket(props) {
  const { bracket } = props

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        horizontal={true}
        data={bracket.rounds}
        renderItem={item => {
          return( 
          <View style={{padding: 40}}> 
            <Round {...item.item} />
            </View>);
        }}
      />
    </View>
  );
}
