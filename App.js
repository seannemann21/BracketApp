import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import BracketForm from './components/BracketForm';
import Bracket from './components/Bracket';
import StyledTextInput from './components/StyledInput';
import SearchScreen from './screens/SearchScreen';

class HomeScreen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <Bracket />
      </View>
    );
  }
}

class CreateScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          paddingTop: '20%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BracketForm />
      </View>
    );
  }
}

const SearchScreenStack = createStackNavigator({
  SearchScreen: {screen: SearchScreen},
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreenStack,
  Create: CreateScreen,
});

export default createAppContainer(TabNavigator);
