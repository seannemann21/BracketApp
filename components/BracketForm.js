import React from 'react';
import {Button, View, Picker} from 'react-native';
import {Formik} from 'formik';
import StyledInput from './StyledInput';

export default function BracketForm() {
  const adjustCompetitorsNum = (newNum, competitors) => {
    return newNum < competitors.length
      ? competitors.filter((value, index) => {
          return index < newNum;
        })
      : competitors.concat(
          Array.from({length: newNum - competitors.length}, () => ({name: ''})),
        );
  };

  const initialNumCompetitors = 4;

  return (
    <Formik
      initialValues={{
        name: '',
        numCompetitors: initialNumCompetitors,
        competitors: Array.from({length: initialNumCompetitors}, () => ({
          name: '',
        })),
      }}
      onSubmit={values => console.log(values)}>
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
                  onChangeText={props.handleChange('name')}
                  onBlur={props.handleBlur('name')}
                  value={props.values.name}
                  placeholder="Bracket Name"
                />
              </View>
              <View style={{flex: 0.3}}>
                <Picker
                  selectedValue={props.values.numCompetitors}
                  onValueChange={(itemValue, itemIndex) => {
                    props.setFieldValue('numCompetitors', itemValue);
                    props.setFieldValue(
                      'competitors',
                      adjustCompetitorsNum(itemValue, props.values.competitors),
                    );
                  }}>
                  <Picker.Item label="2" value={2} />
                  <Picker.Item label="4" value={4} />
                  <Picker.Item label="8" value={8} />
                  <Picker.Item label="16" value={16} />
                </Picker>
              </View>
            </View>
            <View>
              {props.values.competitors.map((competitor, index) => {
                return (
                  <StyledInput
                    key={index}
                    onChangeText={props.handleChange(
                      `competitors[${index}].name`,
                    )}
                    onBlur={props.handleBlur(`competitors[${index}].name`)}
                    value={props.values.competitors[index].name}
                    placeholder={`Competitor ${index + 1}`}
                  />
                );
              })}
            </View>
          </View>
          <Button onPress={props.handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
}
