import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

import { useAppDispatch } from "redux-store/store";
import {
  selectTravelTimeInfo,
  setDestination,
} from "redux-store/slices/navSlice";
import { getTimeOfDay } from "utils/dateUtils";
import ScreenWrapper from "wrappers/ScreenWrapper";
import NavFavourites from "components/NavFavourites";
import GooglePlacesInput from "components/GooglePlacesInput";
import { useSelector } from "react-redux";

const NavigateCard = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigation();
  const travelTimeInfo = useSelector(selectTravelTimeInfo);

  return (
    <ScreenWrapper style={tw`flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>
        Good {getTimeOfDay()}, Toby
      </Text>

      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesInput
          placeholder="Where to?"
          onPress={(data, details) => {
            dispatch(
              setDestination({
                location: details?.geometry.location,
                description: data.description,
              })
            );

            navigator.navigate("RideOptions");
          }}
          styles={toInputBoxStyles}
          listViewDisplayed="auto"
        />

        <NavFavourites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={[
            tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`,
            !travelTimeInfo && tw`bg-gray-600 opacity-60`,
          ]}
          disabled={!travelTimeInfo}
          onPress={() => navigator.navigate("RideOptions")}
        >
          <Icon
            type="font-awesome"
            name="car"
            color="white"
            size={16}
            tvParallaxProperties={{}}
          />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            type="ionicon"
            name="fast-food-outline"
            color="black"
            size={16}
            tvParallaxProperties={{}}
          />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 10,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
