import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const PetMapList = (props) => {
  /* Environment variables for react apps must start with REACT_APP_ */
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  return (
    (isLoaded && (
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '20em' }}
        center={{ lat: 38.75, lng: -9.25 }}
        zoom={10}
        options={{ fullscreenControl: false, streetViewControl: false }}
      >
        {props.pets.map((pet) => (
          <Marker
            key={pet._id}
            position={pet.position}
            onClick={() => props.onMarkerOpen(pet._id)}
          />
        ))}
      </GoogleMap>
    )) || <></>
  );
};

export default PetMapList;
