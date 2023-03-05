import { createMaterialBottomTabNavigator, MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs"
import { MaterialCommunityIcons, AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import { View } from "react-native"
import Home from "~/screens/Home"
import Profile from "~/screens/Profile"
import Cart from "~/screens/Cart"

type BottomTabParamList = {
  Home: undefined
  Profile: undefined
  Cart: undefined
}

export type HomeScreenProps = MaterialBottomTabScreenProps<BottomTabParamList, "Home">

const Bottom = createMaterialBottomTabNavigator<BottomTabParamList>()

function BottomTabs() {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          return (
            <View className="w-[38px] h-[38px] rounded-full justify-center items-center border-[2px] border-[#C4C4C4]">
              {route.name === "Home" ? (
                <SimpleLineIcons name="home" size={24} color="#C4C4C4" />
              ) : route.name === "Profile" ? (
                <AntDesign name="user" size={24} color="#C4C4C4" />
              ) : (
                <MaterialCommunityIcons name="basket" size={24} color="#C4C4C4" />
              )}
            </View>
          )
        },
        labeled: false,
        tabBarLabel: "",
      })}
      barStyle={{ backgroundColor: "#FBEDEA" }}
    >
      <Bottom.Screen name="Profile" component={Profile} />
      <Bottom.Screen name="Home" component={Home} />
      <Bottom.Screen name="Cart" component={Cart} />
    </Bottom.Navigator>
  )
}

export default BottomTabs
