import { Point } from "react-native-google-places-autocomplete";

import store from "../redux-store/store";

export type TypedStore = ReturnType<typeof store.getState>;

export type RootStackParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  EatsScreen: undefined;
  NavigateCard: undefined;
  RideOptions: undefined;
};

export type Location = { location?: Point; description: string };
