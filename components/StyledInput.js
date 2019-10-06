import React from 'react';
import {TextInput} from 'react-native';

export default function StyledInput(props) {
  return (
    <TextInput
      style={{borderBottomColor: 'gray', borderBottomWidth: 1}}
      /* textAlign="center" */
      {...props}
    />
  );
}
