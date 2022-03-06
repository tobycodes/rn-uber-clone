import { useState } from "react";
import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

import ScreenWrapper from "wrappers/ScreenWrapper";
import { useSelector } from "react-redux";
import { selectTravelTimeInfo } from "redux-store/slices/navSlice";
import { formatToCurrency } from "../utils/numberUtils";

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

type RideOption = typeof data[0] & { price: string };

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigator = useNavigation();
  const [selected, setSelected] = useState<RideOption | null>(null);
  const travelTimeInfo = useSelector(selectTravelTimeInfo);

  return (
    <ScreenWrapper style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={[tw`absolute top-3 left-5 p-3 z-50 rounded-full`]}
          onPress={() => navigator.navigate("NavigateCard")}
        >
          <Icon
            name="chevron-left"
            type="fontawesome"
            tvParallaxProperties={{}}
          />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travelTimeInfo?.distance.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { image, id, title, multiplier }, item }) => {
          const travelDuration = travelTimeInfo?.duration.value || 1;

          // Divide by 100 to convert from cents to whole
          const price = formatToCurrency(
            (travelDuration * multiplier * SURGE_CHARGE_RATE) / 100
          );

          return (
            <TouchableOpacity
              style={[
                tw`flex-row justify-between items-center px-10`,
                id === selected?.id && tw`bg-gray-200`,
              ]}
              onPress={() => setSelected({ ...item, price })}
            >
              <Image
                source={{ uri: image }}
                style={{ width: 80, height: 80, resizeMode: "contain" }}
              />
              <View>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>{travelTimeInfo?.duration.text}</Text>
              </View>
              <Text style={tw`text-xl`}>{price}</Text>
            </TouchableOpacity>
          );
        }}
      />

      <View>
        <TouchableOpacity
          style={[tw`bg-black py-3 m-3`, !selected && tw`bg-gray-300`]}
          disabled={!selected}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose{" "}
            {selected
              ? `${selected?.title} - ${selected?.price}`
              : "a ride option"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default RideOptionsCard;
