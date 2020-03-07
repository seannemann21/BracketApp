import React, {useReducer, useMemo} from 'react';
import SearchScreen from './screens/SearchScreen';
import PreviewScreen from './screens/PreviewScreen';
import JoinedScreen from './screens/JoinedScreen';
import BracketScreen from './screens/BracketScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import CreateBracketScreen from './screens/CreateBracketScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from 'axios';
import useAPI from './hooks/useAPI';

export const AuthContext = React.createContext();

const JoinedScreenStack = createStackNavigator();
const SearchScreenStack = createStackNavigator();

const JoinedTab = () => {
  return (
    <JoinedScreenStack.Navigator>
      <JoinedScreenStack.Screen name="Joined" component={JoinedScreen} />
      <JoinedScreenStack.Screen name="Bracket" component={BracketScreen} />
    </JoinedScreenStack.Navigator>
  );
};

const SearchTab = () => {
  return (
    <SearchScreenStack.Navigator>
      <SearchScreenStack.Screen name="Search" component={SearchScreen} />
      <SearchScreenStack.Screen name="Preview" component={PreviewScreen} />
    </SearchScreenStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="JoinedTab" component={JoinedTab} />
      <Tab.Screen name="SearchTab" component={SearchTab} />
      <Tab.Screen name="CreateTab" component={CreateBracketScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            userEmail: action.email,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isSignout: false,
      userToken: null,
    },
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        const {email, password} = data;
        const resp = await axios
          .create({
            baseURL: 'http://10.0.2.2:3000/',
          })
          .post('/login/', {
            user: {email, password},
          });
        const token = resp.headers.authorization.split(' ')[1];

        dispatch({type: 'SIGN_IN', token: token, email: email});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      // signUp: async data => {
      //   // In a production app, we need to send user data to server and get a token
      //   // We will also need to handle errors if sign up failed
      //   // After getting token, we need to persist the token using `AsyncStorage`
      //   // In the example, we'll use a dummy token

      //   dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      // },
      userToken: state.userToken,
      userEmail: state.userEmail,
    }),
    [state],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userToken == null ? (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          ) : (
            <Stack.Screen name="SignIn" component={Home} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
