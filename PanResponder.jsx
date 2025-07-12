import {StyleSheet, PanResponder, Animated} from 'react-native';
import React, {useRef} from 'react';

export default function PanResponderC() {
  const value = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // user just touches the screen
        // initial actions we perform here

        value.setOffset({
          x: value.x._value,
          y: value.y._value,
        });

        value.setValue({x: 0, y: 0});
      },
      onPanResponderMove: (evt, gestureState) => {
        value.setValue({x: gestureState.dx, y: gestureState.dy});

        // stateID - ID of the gestureState- persisted as long as there's at least one touch on screen
        // moveX - the latest screen coordinates of the recently-moved touch
        // moveY - the latest screen coordinates of the recently-moved touch
        // x0 - the screen coordinates of the responder grant
        // y0 - the screen coordinates of the responder grant
        // dx - accumulated distance of the gesture since the touch started
        // dy - accumulated distance of the gesture since the touch started
        // vx - current velocity of the gesture
        // vy - current velocity of the gesture
        // numberActiveTouches - Number of touches currently on screen
      },

      onPanResponderRelease: (evt, gestureState) => {
        value.flattenOffset();
      },
    }),
  ).current

  return (
    <Animated.View
      style={[
        styles.box,
           {transform: [...value.getTranslateTransform()]},
      ]}
      {...panResponder.panHandlers}
    />
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
