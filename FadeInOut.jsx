import {Button, StyleSheet, Animated, View, Easing, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';

export default function FadeInOut() {
 // Create animated values
 const opacity = useRef(new Animated.Value(0)).current;
 const scale = useRef(new Animated.Value(1)).current;
 const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;


  const runAnimation = () => {

        // Reset values before animation
        opacity.setValue(0);
        scale.setValue(1);
        position.setValue({ x: 0, y: 0 });


        Animated.stagger(2000,[ Animated.timing(opacity, { 
            toValue: 1, 
          
            useNativeDriver: true 
          }), Animated.timing(scale, { 
            toValue: 1.5, 
          
            useNativeDriver: true 
          }), Animated.timing(position, { 
            toValue: {x:0,y:-50}, 
       
            useNativeDriver: true 
          })]).start()

        
       

  };



  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            opacity,
            transform: [
              { scale },
              {translateX:position.x},{translateY:position.y}
            ]
          }
        ]}
      >
        <Text style={styles.text}>Animated Box</Text>
      </Animated.View>
      
      <TouchableOpacity
        style={styles.button} 
        onPress={runAnimation}
      >
        <Text style={styles.buttonText}>Run Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    marginTop: 200,
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
