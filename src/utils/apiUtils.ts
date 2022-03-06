import { Location } from "types/base.types";

export const toDistanceMatrixUrl = (origin: Location, destination: Location) =>
  `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${process.env.GOOGLE_API_KEY}`;
