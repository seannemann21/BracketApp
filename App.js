import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BracketForm from './components/BracketForm';
import StyledTextInput from './components/StyledInput';

class HomeScreen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <StyledTextInput 
        placeholder={"Placeholder"} />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{paddingTop: '20%', justifyContent: 'center', alignItems: 'center'}}>
        <BracketForm />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);
