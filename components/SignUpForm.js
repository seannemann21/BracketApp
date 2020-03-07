import React from 'react';
import {Button, View} from 'react-native';
import {Formik} from 'formik';
import StyledInput from './StyledInput';
import {string, object, ref} from 'yup';
import ErrorMessages from './ErrorMessages';
import axios from 'axios';

const signUpSchema = object().shape({
  email: string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  password: string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be no greater than 20 characters'),
  passwordConfirmation: string().oneOf(
    [ref('password'), null],
    'Passwords must match',
  ),
});

const submitForm = (values, actions) => {
  const { passwordConfirmation, ...user} = values;
  axios
    .create({
      baseURL: 'http://10.0.2.2:3000/',
    })
    .post('/signup/', {
      user,
    })
    .then(() => {
      actions.setSubmitting(false);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export default function SignUpForm() {
  return (
    <Formik
      validationSchema={signUpSchema}
      initialValues={{
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      onSubmit={(values, actions) => {
        submitForm(values, actions);
      }}>
      {props => (
        <View style={{width: '80%'}}>
          <View style={{paddingBottom: 30}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.7}}>
                <StyledInput
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}
                  placeholder="Email"
                />
              </View>
              <View style={{flex: 0.7}}>
                <StyledInput
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                  placeholder="Password"
                />
              </View>
              <View style={{flex: 0.7}}>
                <StyledInput
                  onChangeText={props.handleChange('passwordConfirmation')}
                  onBlur={props.handleBlur('passwordConfirmation')}
                  value={props.values.passwordConfirmation}
                  placeholder="Confirm Password"
                />
              </View>
            </View>
          </View>
          <Button onPress={props.submitForm} title="Submit" />
          <View>
            <ErrorMessages errors={props.errors} touched={props.touched} />
          </View>
        </View>
      )}
    </Formik>
  );
}
