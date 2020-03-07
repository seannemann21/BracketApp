import React, {useEffect, useState} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import axios from 'axios';
import LoginForm from '../components/LoginForm';

export default function LoginScreen(props) {
  const navigation = props.navigation;
  return (
    <View
      style={{
        height: '100%',
      }}>
      <LoginForm navigation={navigation} />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}
