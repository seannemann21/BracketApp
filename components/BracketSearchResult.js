import React from 'react';
import {Button, View, Picker, Text} from 'react-native';

export default function BracketSearchResult(props) {
  const {name, creator, created_at, id} = props;
  const creatorUsername = creator && creator.username ? creator.username : 'unknown';

  return (
    <View
      style={{
        width: '80%',
        borderWidth: 1,
      }}>
      <Text>{`${name}: ${creatorUsername}`}</Text>
      <Text>{`${created_at}`}</Text>
    </View>
  );
}
