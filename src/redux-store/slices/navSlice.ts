import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Location, TypedStore } from "types/base.types";

type TravelTimeInfo = {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
};

type NavSliceState = {
  origin: Location | null;
  destination: Location | null;
  travelTimeInfo: TravelTimeInfo | null;
};

const initialState: NavSliceState = {
  origin: null,
  destination: null,
  travelTimeInfo: null,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<NavSliceState["origin"]>) => {
      state.origin = action.payload;
    },
    setDestination: (
      state,
      action: PayloadAction<NavSliceState["destination"]>
    ) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (
      state,
      action: PayloadAction<NavSliceState["travelTimeInfo"]>
    ) => {
      state.travelTimeInfo = action.payload;
    },
  },
});

export const { setDestination, setOrigin, setTravelTimeInfo } =
  navSlice.actions;

export const selectOrigin = (state: TypedStore) => state.nav.origin;
export const selectDestination = (state: TypedStore) => state.nav.destination;
export const selectTravelTimeInfo = (state: TypedStore) =>
  state.nav.travelTimeInfo;

export default navSlice.reducer;
