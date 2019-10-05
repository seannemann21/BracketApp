import React from 'react';
import {Button, TextInput, View, Picker} from 'react-native';
import {Formik, FieldArray} from 'formik';

function StyledTextInput(props) {
  return (
    <TextInput style={{backgroundColor: 'blue', color: 'white'}} {...props} />
  );
}

export default function BracketForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        competitors: [
          {name: ''},
          {name: ''},
          {name: ''},
          {name: ''},
          {name: ''},
          {name: ''},
          {name: ''},
          {name: ''},
        ],
      }}
      onSubmit={values => console.log(values)}>
      {props => (
        <View>
          <StyledTextInput
            onChangeText={props.handleChange('name')}
            onBlur={props.handleBlur('name')}
            value={props.values.name}
          />

          <Picker>
            <Picker.Item label="2" value="2" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="16" value="16" />
          </Picker>
          <FieldArray name="competitors">
            <>
              {props.values.competitors.map((competitor, index) => {
                return (
                  <View key={index}>
                    <TextInput
                      onChangeText={props.handleChange(
                        `competitors[${index}].name`,
                      )}
                      onBlur={props.handleBlur(`competitors[${index}].name`)}
                      value={props.values.competitors[index].name}
                    />
                  </View>
                );
              })}
            </>
          </FieldArray>
          <Button onPress={props.handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
}
