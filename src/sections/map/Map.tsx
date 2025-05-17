import React, { forwardRef } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

export interface MapHandle {}

type MapProps = {
  lat: number;
  lng: number;
};

const Map = forwardRef<MapHandle, MapProps>(({ lat, lng }, ref) => {
  const center = { lat, lng };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
});

Map.displayName = 'Map';
export { Map };
