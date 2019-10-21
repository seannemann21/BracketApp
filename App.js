import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import BracketForm from './components/BracketForm';
import Bracket from './components/Bracket';
import StyledTextInput from './components/StyledInput';
import SearchScreen from './screens/SearchScreen';
import PreviewScreen from './screens/PreviewScreen';
import JoinedScreen from './screens/JoinedScreen';
import BracketScreen from './screens/BracketScreen';

class HomeScreen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        {/* <Bracket /> */}
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

const JoinedScreenStack = createStackNavigator({
  JoinedScreen: {screen: JoinedScreen},
  BracketScreen: {screen: BracketScreen},
});

const SearchScreenStack = createStackNavigator({
  SearchScreen: {screen: SearchScreen},
  PreviewScreen: {screen: PreviewScreen},
});

const TabNavigator = createBottomTabNavigator({
  Joined: JoinedScreenStack,
  Search: SearchScreenStack,
  Create: CreateScreen,
});

export default createAppContainer(TabNavigator);
