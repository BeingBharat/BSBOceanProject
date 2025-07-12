import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
// import messaging from '@react-native-firebase/messaging';


export default function CloudMessaging() {

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);

// useEffect(()=>{

  
//     async function requestUserPermission() {
//         const authStatus = await messaging().requestPermission();
//         const enabled =
//           authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//           authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      
//         if (enabled) {
//           console.log('Authorization status:', authStatus);
//            let token= await messaging().getToken()
//            console.log(token)
//         }
//       }
//       requestUserPermission()

// },[])

  return (
    <View>
      <Text>Push Notification Implementation in Android</Text>
    </View>
  )
}

const styles = StyleSheet.create({})