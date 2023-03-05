import { FC } from "react"
import { View, Text, Image } from "react-native"
const SplashImg = require("~/assets/splashbgmain.jpg")
import Button from "~/components/Button"
import { AntDesign } from "@expo/vector-icons"

import { SplashScreenProps } from "~/navigations/Main"

const Splash: FC<SplashScreenProps> = ({ navigation }) => {
  return (
    <View className="flex-auto bg-[#FBEDEA] relative">
      <Image source={SplashImg} className="w-screen h-screen" />
      <View className="z-10 absolute bg-black/20 w-screen h-screen py-[71px] px-[48px] items-center justify-between">
        <Text className="text-black text-center text-[24px] leading-[32.78px] font-black font-avenir">RAW CHOW</Text>
        <View>
          <Text className="font-avenir text-white text-center text-[24px] leading-[32.78px] font-black mb-[10px]">
            Welcome to RawChow
          </Text>
          <Text className="font-avenir text-white text-center text-[16px] leading-[21.86px] font-light max-w-[278px] mb-[34px]">
            Order the best meals in Ilorin and have them delivered to your doorstep in little or no time. Doesn’t that
            sound delicious???
          </Text>
          <Button onChange={() => navigation.navigate("Home")}>
            <AntDesign name="arrowright" size={24} color="black" />
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Splash
