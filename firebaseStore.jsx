import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';

export default function FireBaseStore() {
  const getData = async () => {
    const users = await firestore().collection('firstTest').get();
    const user = await firestore()
      .collection('firstTest')
      .doc('FGdSgkO6NxRmlrZPCXWV')
      .get();
    console.log(users, user);
  };

  const addDAta = () => {
    firestore()
    .collection('firstTest')
    // Filter results
    .where('age', '>=', 18)
    .get()
    .then(querySnapshot => {
       console.log(querySnapshot)
    });
  };
  return (
    <View>
      <Text>FireBaseStore</Text>
      <Button onPress={getData} title="get Data" />
      <Button onPress={addDAta} title="filter  Data" />
    </View>
  );
}

const styles = StyleSheet.create({});
