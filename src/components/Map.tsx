import { useRef, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";

import {
  selectOrigin,
  selectDestination,
  setTravelTimeInfo,
} from "redux-store/slices/navSlice";
import { useAppDispatch } from "redux-store/store";
import { toDistanceMatrixUrl } from "utils/apiUtils";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef<MapView>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!origin?.location && !destination?.location) return;

    if (!mapRef.current) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    const getTravelTime = async () => {
      if (!origin?.location || !destination?.location) return;
      const response = await fetch(toDistanceMatrixUrl(origin, destination));
      const json = await response.json();

      dispatch(setTravelTimeInfo(json.rows[0].elements[0]));
    };

    getTravelTime();
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      region={{
        latitude: origin?.location?.lat!,
        longitude: origin?.location?.lng!,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          strokeWidth={2}
          origin={origin.description}
          destination={destination.description}
          apikey={process.env.GOOGLE_API_KEY as string}
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location?.lat!,
            longitude: origin?.location?.lng!,
          }}
          title="Origin"
          description={origin?.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination?.location?.lat!,
            longitude: destination?.location?.lng!,
          }}
          title="Destination"
          description={destination?.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
