import React from 'react';
import {Text} from 'react-native';

export default function ErrorMessages(props) {
  const errorMessages = [];
  const iterate = (errors, touched) => {
    Object.keys(touched).forEach(key => {
      if (typeof touched[key] === 'object' && errors[key]) {
        iterate(errors[key], touched[key]);
      } else if (touched[key] && errors[key]) {
        errorMessages.push(errors[key]);
      }
    });
  };
  iterate(props.errors, props.touched);

  return <Text>{JSON.stringify(errorMessages)}</Text>;
}
