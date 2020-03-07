import React, {useEffect, useState} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import axios from 'axios';
import SignUpForm from '../components/SignUpForm';

export default function LoginScreen(props) {
  return (
    <View
      style={{
        height: '100%',
      }}>
      <SignUpForm />
    </View>
  );
}
