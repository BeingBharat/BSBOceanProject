import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailScreen';
import BasicAnimation from './BasicAnimation';
import AnimatedAPI from './AnimatedAPI';
import FadeInOut from './FadeInOut';
import PanResponderC from './PanResponder';
import FirebaseApp from './firebaseApp';
import analytics from '@react-native-firebase/analytics';
import Timer from './cutomHooks/timer';

const Stack = createStackNavigator();

export default function App({title, onPress}) {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  return (
    <NavigationContainer
    ref={navigationRef}
    onReady={() => {
      routeNameRef.current = navigationRef.current.getCurrentRoute().name;
    }}
    onStateChange={async () => {
      const previousRouteName = routeNameRef.current;
      const currentRouteName = navigationRef.current.getCurrentRoute().name;

      if (previousRouteName !== currentRouteName) {
        await analytics().logScreenView({
          screen_name: currentRouteName,
          screen_class: currentRouteName,
        });
      }
      routeNameRef.current = currentRouteName;
    }}
  >
      <Stack.Navigator initialRouteName="timer">
        <Stack.Screen name="FirebaeApp" component={FirebaseApp} />
        <Stack.Screen name="timer" component={Timer} />


      </Stack.Navigator>
    </NavigationContainer>
  );


}

const styles = StyleSheet.create({});
