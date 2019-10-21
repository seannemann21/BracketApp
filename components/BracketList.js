import React from 'react';
import {FlatList, View} from 'react-native';
import BracketSearchResult from './BracketSearchResult';

export default function BracketList({brackets, navigation, nextScreen}) {
  return (
    <FlatList
      data={brackets}
      renderItem={item => {
        return (
          <View style={{alignItems: 'center', paddingBottom: 20}}>
            <BracketSearchResult
              {...item.item}
              navigation={navigation}
              nextScreen={nextScreen}
            />
          </View>
        );
      }}
    />
  );
}
