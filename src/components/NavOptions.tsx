import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import type { RootStackParamList } from "types/base.types";
import { selectOrigin } from "redux-store/slices/navSlice";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

type Option = Omit<typeof data[0], "screen"> & {
  screen: keyof RootStackParamList;
};

const NavOptions = () => {
  const navigator = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      horizontal
      data={data as Option[]}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          onPress={() => navigator.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={!origin && tw`opacity-70`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              type="antdesign"
              name="arrowright"
              color="white"
              tvParallaxProperties={{}}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
