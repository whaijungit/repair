import React from 'react'
import { Colors } from '@/helpers'
import { StyleSheet, Text, View } from 'react-native'

const SpotCheckMessageScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={Colors.textStyle}>SpotCheckMessageScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SpotCheckMessageScreen;
