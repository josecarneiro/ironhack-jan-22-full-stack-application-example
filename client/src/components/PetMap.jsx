import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const PetMap = (props) => {
  /* Environment variables for react apps must start with REACT_APP_ */
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    if (props.onMarkerChange) {
      props.onMarkerChange({ lat, lng });
    }
  };

  return (
    (isLoaded && (
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '20em' }}
        center={{ lat: 38.75, lng: -9.25 }}
        zoom={10}
        onClick={handleMapClick}
        options={{ fullscreenControl: false, streetViewControl: false }}
      >
        {props.marker && <Marker position={props.marker} />}
      </GoogleMap>
    )) || <></>
  );
};

export default PetMap;
