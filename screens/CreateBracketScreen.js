import React, {useEffect, useState, useContext} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import axios from 'axios';
import BracketList from '../components/BracketList';
import BracketForm from '../components/BracketForm';
import {AuthContext} from '../App';

const CreateBracketScreen = ({navigation}) => {
  const value = useContext(AuthContext);
  const authToken = value.userToken;
  const userEmail = value.userEmail;
  console.log(authToken);
  return (
    <View
      style={{
        paddingTop: '20%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <BracketForm authToken={authToken} authorEmail={userEmail} />
    </View>
  );
};

export default CreateBracketScreen;
