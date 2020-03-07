import React, {useEffect, useState, useContext} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import BracketList from '../components/BracketList';
import useAPI from '../hooks/useAPI';

export default function SearchScreen(props) {
  const [brackets, setBrackets] = useState([]);
  const navigation = props.navigation;
  const nextScreen = 'PreviewScreen';
  const {response, isLoading} = useAPI('/brackets/');

  useEffect(() => {
    if (response) {
      setBrackets(response.data);
    }
  }, [response]);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: '20%',
      }}>
      {isLoading ? (
        <Button title="Loading..." />
      ) : (
        <BracketList
          brackets={brackets}
          navigation={navigation}
          nextScreen={nextScreen}
        />
      )}
    </View>
  );
}
