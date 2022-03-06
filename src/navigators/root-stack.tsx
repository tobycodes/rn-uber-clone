import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "screens/HomeScreen";
import MapScreen from "screens/MapScreen";

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MapScreen"
      component={MapScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default RootStackNavigator;
