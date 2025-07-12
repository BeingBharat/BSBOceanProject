import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import GoogleSignIn from './googleSignIn';
import CloudMessaging from './cloudMessaging';
import Analytics from './analytics';
import FireBaseStore from './firebaseStore';

export default function FirebaseApp() {
  const loginAnonymous = () => {
    auth()
      .signInAnonymously()
      .then(data => {
        console.log('User signed in anonymously', data);
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  };

  const loginWithEmail = () => {
    auth()
      .signInWithEmailAndPassword(
        'bsbocean.tech@gmail.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const logout=()=>{

auth()
.signOut()
.then(() => console.log('User signed out!'));
  }

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
  
    if (!user) {
      return (
        <View>
          <Text>Login</Text>
          <Button title="Login With Email" onPress={loginWithEmail} />
        </View>
      );
    }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      {/* <GoogleSignIn /> */}
      {/* <CloudMessaging /> */}
      {/* <Analytics />
       */}
       <FireBaseStore />
      <Button  title='logout' onPress={logout}/>
    </View>
  );
}

const styles = StyleSheet.create({});
