import { View, Image } from "react-native";
import tw from "twrnc";

import NavOptions from "components/NavOptions";
import GooglePlacesInput from "components/GooglePlacesInput";
import ScreenWrapper from "wrappers/ScreenWrapper";
import { setOrigin } from "redux-store/slices/navSlice";
import { useAppDispatch } from "redux-store/store";
import NavFavourites from "components/NavFavourites";

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <ScreenWrapper>
      <View style={tw`p-5`}>
        <Image
          source={{ uri: "https://links.papareact.com/gzs" }}
          style={[tw`h-[100px] w-[100px]`, { resizeMode: "contain" }]}
        />

        <GooglePlacesInput
          placeholder="Where from?"
          onPress={(data, details) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );
          }}
        />

        <NavOptions />

        <NavFavourites />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
