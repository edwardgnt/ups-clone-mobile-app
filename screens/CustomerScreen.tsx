import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn';

const CustomerScreen = () => {
    const tw = useTailwind();
  return (
    <View>
      <Text style={tw("text-blue-500")}>CustomerScreen</Text>
    </View>
  )
}

export default CustomerScreen