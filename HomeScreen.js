import React, { useEffect, useRef } from 'react';
import { View, Text, PanResponder, Animated, Dimensions, StyleSheet } from 'react-native';



const Home = () => {
  const pan = useRef(new Animated.ValueXY()).current;
 
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
     
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (evt, gestureState) => {
        pan.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        pan.flattenOffset();
      }
    })
  ).current;




  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.card,{
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          }]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.text}>Swipe me!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: 200,
    height: 200,
    backgroundColor: '#FE474C',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
});

export default Home;