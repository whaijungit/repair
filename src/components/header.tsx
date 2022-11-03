import React from 'react'
import { windowSize } from '@/helpers'
import { StyleSheet, View } from 'react-native'

interface HomeHeaderProps {
  leftRC?: React.ReactNode,
  rightRC?: React.ReactNode,
}

const Header: React.FC<HomeHeaderProps> = ({ leftRC, rightRC }) => {
  return (
    <View style={styles.headerStyle}>
      {leftRC}
      {rightRC}
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 52,
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: windowSize.width,
    backgroundColor: 'rgb(19, 36, 52)',
  }
})

export default Header;
