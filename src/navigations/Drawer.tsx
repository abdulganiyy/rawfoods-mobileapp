import React from "react"
import { View } from "react-native"
import { createDrawerNavigator, DrawerScreenProps } from "@react-navigation/drawer"

import BottomTabs from "./BottomTabs"
import Settings from "~/screens/Settings"

const Draw = createDrawerNavigator()

const Drawer = () => {
  return (
    <Draw.Navigator screenOptions={{}}>
      <Draw.Screen name="BottomTabs" component={BottomTabs} />
      <Draw.Screen name="Settings" component={Settings} />
    </Draw.Navigator>
  )
}

export default Drawer
