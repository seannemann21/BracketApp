import React from 'react';
import {Button, View} from 'react-native';
import {Formik} from 'formik';
import StyledInput from './StyledInput';
import {string, object} from 'yup';
import ErrorMessages from './ErrorMessages';
import {AuthContext} from '../App';
import useAPI from '../hooks/useAPI';

const createUserSchema = object().shape({
  email: string().required('Please enter an email'),
  password: string().required('Please enter a password'),
});

const submitForm = async (signIn, values, actions) => {
  await signIn(values);
  actions.setSubmitting(false);
};

export default function CreateUserForm() {
  const {signIn} = React.useContext(AuthContext);

  return (
    <Formik
      validationSchema={createUserSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        submitForm(signIn, values, actions);
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
