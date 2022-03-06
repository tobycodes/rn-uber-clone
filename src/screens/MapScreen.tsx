import { View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Icon } from "react-native-elements";

import Map from "components/Map";
import MapScreenStackNavigator from "navigators/stack/map-stack";

const MapScreen = () => {
  return (
    <View>
      <TouchableOpacity
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 rounded-full shadow-lg p-2`}
      >
        <Icon name="menu" size={35} tvParallaxProperties={{}} />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <MapScreenStackNavigator />
      </View>
    </View>
  );
};

export default MapScreen;
