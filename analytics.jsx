import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import analytics from '@react-native-firebase/analytics';

export default function Analytics() {
 
  return (
    <View>
    <Button
      title="Add To Basket"
      onPress={async () =>
        await analytics().logEvent('basket', {
          id: 3745092,
          item: 'mens grey t-shirt',
          description: ['round neck', 'long sleeved'],
          size: 'L',
        })
      }
    />
  </View>

  )
}

const styles = StyleSheet.create({})