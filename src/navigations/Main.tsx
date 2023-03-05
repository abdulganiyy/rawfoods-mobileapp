import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import Splash from "~/screens/Splash"
import Login from "~/screens/Login"
import Drawer from "./Drawer"

type RootStackParamList = {
  Splash: undefined
  Login: undefined
  Home: undefined
}

export type SplashScreenProps = StackScreenProps<RootStackParamList, "Splash">
export type LoginScreenProps = StackScreenProps<RootStackParamList, "Login">

const Stack = createStackNavigator<RootStackParamList>()

function Main() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Drawer} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  )
}

export default Main
