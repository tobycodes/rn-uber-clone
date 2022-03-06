import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import tw from "twrnc";

import { selectOrigin } from "redux-store/slices/navSlice";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavourites = () => {
  const navigator = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5 ${!origin ? "opacity-70" : ""}`}
          disabled={!origin}
          onPress={() => {}}
        >
          <Icon
            name={icon}
            color="white"
            type="ionicon"
            size={18}
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            tvParallaxProperties={{}}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
