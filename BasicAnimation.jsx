import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function BasicAnimation() {
  const [value, setValue] = useState(20);
  const [intervalId, setIntervalId] = useState(null);

  const moveBox = () => {
    if (intervalId) return;

    let id = setInterval(() => {
      setValue(prev => {
        if (prev < 300) return prev + 5;
        clearInterval(id);
        setIntervalId(null);
        return 20;
      });
    }, 1);

    setIntervalId(id);
  };

  return (
    <View>
      <View style={[styles.box, {left: value}]} />
      <Button title="move" onPress={moveBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 12,
    left: 20,
    top: 20,
    marginBottom: 50,
  },
});
