import { FC, useState, useCallback, useMemo, useRef } from "react"
import React from "react"
import { View, Text, Pressable } from "react-native"
import Button from "~/components/Button"
import { LinearGradient } from "expo-linear-gradient"
import Logo from "~/components/Logo"
import TextInput from "~/components/TextInput"
import Icon from "~/components/Icon"
import { BottomSheetModalProvider, BottomSheetModal } from "@gorhom/bottom-sheet"

import { FontAwesome, MaterialIcons } from "@expo/vector-icons"

import { LoginScreenProps } from "~/navigations/Main"

const Login: FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("abc@gmail.com")
  const [password, setPassword] = useState("")

  // ref
  const bottomSheetRef = useRef<BottomSheetModal>(null)

  // variables
  const snapPoints = useMemo(() => ["80%"], [])

  const openSheet = () => {
    bottomSheetRef.current?.present()
  }

  const closeSheet = () => {
    bottomSheetRef.current?.close()
  }

  return (
    <BottomSheetModalProvider>
      <View className="h-screen bg-gradient-to-br from-sky-500 to-indigo-500 relative">
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
        <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: "#FBEDEA" }}
          onDismiss={closeSheet}
        >
          <View className="rounded-3xl h-screen">
            <Text className="text-center pt-2 text-[#FF785B] text-[20px] font-normal leading-[27px]">Sign Up</Text>
            <View className="mt-[50px] px-7">
              <View className="mb-8">
                <TextInput placeholder="Username" />
              </View>
              <View className="mb-8">
                <TextInput placeholder="Email" />
              </View>
              <View className="mb-8">
                <TextInput placeholder="Password" />
              </View>
              <View className="mb-8">
                <TextInput placeholder="Confirm Password" />
              </View>
            </View>
            <View className="px-10">
              <Button variant="primary" onChange={() => navigation.navigate("Splash")}>
                <Text className="text-white">Never Hungry Again!</Text>
              </Button>
            </View>
            <View className="pt-4">
              <Text className="text-center">Sign in with</Text>
              <View className="flex-row justify-center mt-5">
                <Icon>
                  <FontAwesome name="facebook" size={24} color="white" />
                </Icon>
                <Icon color="bg-red-500">
                  <FontAwesome name="twitter" size={24} color="white" />
                </Icon>
              </View>
            </View>
          </View>
        </BottomSheetModal>
        <Pressable onPress={openSheet} className="w-[90%] bottom-0 absolute rounded-t-[33px] bg-[#FF785B] mx-[5%]">
          <Text className="text-center">
            <MaterialIcons name="keyboard-arrow-up" size={34} color="white" />
          </Text>
          <Text className="text-center  text-white text-[20px] font-normal leading-[27px]">Sign Up</Text>
        </Pressable>
      </View>
    </BottomSheetModalProvider>
  )
}

export default Login
