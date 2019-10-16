import React from 'react';
import {View, Text} from 'react-native';

export default function Matchup(props) {
  return (
    <View>
      {props.competitors.map(competitor => {
        return (
          <View style={{borderWidth: 1, width: 250, height: 40, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{competitor.name}</Text>
          </View>
        );
      })}
    </View>
  );
}
