// DetailsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  // Extract parameters
  const { itemId, itemName } = route.params || { itemId: 'No ID', itemName: 'No Name' };

  return (
    <View style={styles.container} testID="details-screen">
      <Text style={styles.title}>Details Screen</Text>
      <Text testID="item-id">Item ID: {itemId}</Text>
      <Text testID="item-name">Item Name: {itemName}</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        testID="back-button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DetailsScreen;