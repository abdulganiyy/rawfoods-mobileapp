import React, { ReactNode, FC } from "react"
import { Text, View } from "react-native"

interface IconProps {
  children: ReactNode
  color?: string
}

const Icon: FC<IconProps> = ({ children, color }) => {
  return (
    <View className={`w-[30px] h-[30px] justify-center items-center bg-blue-500 rounded-full ${color}`}>
      <Text className="">{children}</Text>
    </View>
  )
}

export default Icon
