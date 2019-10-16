import React from 'react';
import {Button, View, Picker, Text, TouchableHighlight} from 'react-native';

export default function BracketSearchResult(props) {
  const {name, creator, created_at, id, navigation} = props;
  const creatorUsername =
    creator && creator.username ? creator.username : 'unknown';

  const navigateToPreview = () => {
    navigation.navigate('PreviewScreen', {id: id});
  };

  return (
    <View
      style={{
        width: '80%',
        borderWidth: 1,
      }}>
      <TouchableHighlight onPress={navigateToPreview}>
        <>
        <Text>{`${name}: ${creatorUsername}`}</Text>
        <Text>{`${created_at}`}</Text>
        </>
      </TouchableHighlight>
    </View>
  );
}
