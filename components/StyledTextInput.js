import React from 'react';
import TextInput from 'react-native';

function StyledTextInput(props) {
  return (
    <TextInput style={{backgroundColor: 'blue', color: 'white'}} {...props} />
  );
}

export default StyledTextInput;
