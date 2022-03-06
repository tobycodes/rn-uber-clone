import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigateCard from "components/NavigateCard";
import RideOptionsCard from "components/RideOptionsCard";

const MapScreenStack = createNativeStackNavigator();

const MapScreenStackNavigator = () => (
  <MapScreenStack.Navigator>
    <MapScreenStack.Screen
      name="NavigateCard"
      component={NavigateCard}
      options={{ headerShown: false }}
    />
    <MapScreenStack.Screen
      name="RideOptions"
      component={RideOptionsCard}
      options={{ headerShown: false }}
    />
  </MapScreenStack.Navigator>
);

export default MapScreenStackNavigator;
