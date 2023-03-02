import { FC, useState, useCallback, useMemo, useRef } from "react"
import React from "react"
import { View, Text } from "react-native"
import Button from "~/components/Button"
import { LinearGradient } from "expo-linear-gradient"
import Logo from "~/components/Logo"
import TextInput from "~/components/TextInput"
import Icon from "~/components/Icon"
import BottomSheet from "@gorhom/bottom-sheet"

import { FontAwesome } from "@expo/vector-icons"

import { LoginScreenProps } from "~/navigations/Main"

const Login: FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("abc@gmail.com")
  const [password, setPassword] = useState("")

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null)

  // variables
  const snapPoints = useMemo(() => ["50%", "8%"], [])

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    // console.log("handleSheetChanges", index)
  }, [])

  return (
    <View className="h-screen bg-gradient-to-br from-sky-500 to-indigo-500">
      <LinearGradient colors={["#FBEDEA", "#FFFDFD"]} style={{ flex: 1, paddingTop: 50 }}>
        <Logo />
        <View className="mt-[50px] px-7">
          <View className="mb-8">
            <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder="Email" />
          </View>
          <View className="mb-8">
            <TextInput value={password} onChangeText={(text) => setPassword(text)} placeholder="Password" />
          </View>
        </View>
        <Text className="text-center">Forgot Password?</Text>
        <View className="mt-10 px-10">
          <Button variant="primary" onChange={() => navigation.navigate("Splash")}>
            <Text className="text-white">Eat Away!</Text>
          </Button>
        </View>
        <View className="pt-20">
          <Text className="text-center">Sign in with</Text>
          <View className="flex-row justify-center mt-10">
            <Icon>
              <FontAwesome name="facebook" size={24} color="white" />
            </Icon>
            <Icon color="bg-red-500">
              <FontAwesome name="twitter" size={24} color="white" />
            </Icon>
          </View>
        </View>
      </LinearGradient>
      <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints} onChange={handleSheetChanges}>
        <View className="rounded-3xl bg-[#FF785B] h-screen mx-6">
          <Text className="text-center pt-2 text-white text-[20px] font-normal leading-[27px]">Sign Up</Text>
        </View>
      </BottomSheet>
    </View>
  )
}

export default Login
