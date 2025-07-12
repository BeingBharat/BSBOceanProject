import {Button, StyleSheet, Animated, View} from 'react-native';
import React, {useRef} from 'react';

export default function AnimatedAPI() {
  const value = useRef(new Animated.ValueXY({x:0,y:0})).current;
  //   const opac = useRef(new Animated.Value(0)).current;

  // value.setValue({x:300,y:300})

  // value.setOffset({x:200,y:200});

  // value.flattenOffset()

//   value.getLayout()  //  { left:0,top:0  }
//   value.getTranslateTransform()  // [{translateX:0,translateY:0}]

  const moveBox = () => {
    Animated.timing(value, {
      toValue: 1,
      duration: 1000,

      useNativeDriver: true,
    }).start();
  };

  const position = value.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 300],
    extrapolate:'clamp'
  });

  const opacity = value.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.2],
  });

  const scale = value.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.3],
  });

  const rotation = value.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View>
      <Animated.View
        style={[
          styles.box,
          {transform: [{translateX: position},{rotate:rotation},  {scale},]},
          {opacity: opacity},
        
          
        ]}
      />
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
