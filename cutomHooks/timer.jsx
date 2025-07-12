import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {timerHook} from './timerHook';

export default function Timer() {
  const {timer, startTimer, stopTimer, resetTimer} = timerHook();
  return (
    <View>
      <Text>Timer</Text>
      <Text>{timer}</Text>
      <Button title="start" onPress={startTimer} />
      <Button title="stop" onPress={stopTimer} />
      <Button title="reset" onPress={resetTimer} />
    </View>
  );
}

const styles = StyleSheet.create({});
