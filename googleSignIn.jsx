import { Button, StyleSheet, Text, View ,PermissionsAndroid} from 'react-native'
import React, { useEffect } from 'react'
import {
    GoogleSignin,
    statusCodes,
    // type OneTapUser,
  } from '@react-native-google-signin/google-signin';

  GoogleSignin.configure({
    webClientId: '563777431383-f2r9b17g3l1epli58q1jaied4b8j68u7.apps.googleusercontent.com',
  });

export default function GoogleSignIn() {


    const signIn = async () => {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token


  const signInResult = await GoogleSignin.signIn();

  // Try the new style of google-sign in result, from v13+ of that module
  idToken = signInResult.data?.idToken;
  
  if (!idToken) {
    // if you are using older versions of google-signin, try old style result
    idToken = signInResult.idToken;
  }
  if (!idToken) {
    throw new Error('No ID token found');
  }

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
      };
      
      
      

  return (
    <View>
      <Text>googleSignIn</Text>
      <Button onPress={signIn} title='google Sign IN ' />
    </View>
  )
}
