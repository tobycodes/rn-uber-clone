import { FC } from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import type { GooglePlacesAutocompleteProps } from "react-native-google-places-autocomplete";
import tw from "twrnc";

type IProps = Omit<
  GooglePlacesAutocompleteProps,
  "query" | "currentLocation" | "currentLocationLabel"
>;

const GooglePlacesInput: FC<IProps> = ({ placeholder, onPress, ...rest }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder || "Search"}
      onPress={onPress}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      minLength={2}
      fetchDetails={true}
      query={{
        key: process.env.GOOGLE_API_KEY,
        language: "en",
      }}
      key="search"
      styles={{
        container: { flex: 0 },
        textInput: { fontSize: 18 },
        listView: { zIndex: 1222 },
      }}
      {...rest}
    />
  );
};

export default GooglePlacesInput;
