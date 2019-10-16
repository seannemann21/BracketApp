import React from 'react';
import {View, Text} from 'react-native';

export default function Matchup(props) {
  const competitors =
    props.competitors.length > 0 ? props.competitors : [{name: 'TBD'}, {name: 'TBD'}];

  return (
    <View>
      {competitors.map(competitor => {
        return (
          <View style={{borderWidth: 1, width: 250, height: 40, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{competitor.name}</Text>
          </View>
        );
      })}
    </View>
  );
}
