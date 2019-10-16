import React from 'react';
import {FlatList, View, Text} from 'react-native';
import Round from './Round';

export default function Bracket(props) {
  const testBracket = {
    rounds: [
      {
        matchups: [
          {
            competitors: [{name: 'Team 1'}, {name: 'Team 9'}],
          },
          {
            competitors: [{name: 'Team 2'}, {name: 'Team 10'}],
          },
          {
            competitors: [{name: 'Team 3'}, {name: 'Team 11'}],
          },
          {
            competitors: [{name: 'Team 4'}, {name: 'Team 12'}],
          },
          {
            competitors: [{name: 'Team 5'}, {name: 'Team 13'}],
          },
          {
            competitors: [{name: 'Team 6'}, {name: 'Team 14'}],
          },
          {
            competitors: [{name: 'Team 7'}, {name: 'Team 15'}],
          },
          {
            competitors: [{name: 'Team 8'}, {name: 'Team 16'}],
          },
        ],
      },
      {
        matchups: [
          {
            competitors: [{name: 'Team 1'}, {name: 'Team 2'}],
          },
          {
            competitors: [{name: 'Team 3'}, {name: 'Team 4'}],
          },
          {
            competitors: [{name: 'Team 5'}, {name: 'Team 6'}],
          },
          {
            competitors: [{name: 'Team 7'}, {name: 'Team 8'}],
          },
        ],
      },
      /*
      {
        matchups: [
          {
            competitors: [{name: 'Team 1'}, {name: 'Team 3'}],
          },
          {
            competitors: [{name: 'Team 5'}, {name: 'Team 7'}],
          },
        ],
      },
      {
        matchups: [
          {
            competitors: [{name: 'Team 1'}, {name: 'Team 5'}],
          },
        ],
      },
      */
    ],
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        horizontal={true}
        data={testBracket.rounds}
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
