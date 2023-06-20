import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import parks from './parks.json';

const Map = () => {
  const renderMarkers = (map, maps) => {
    const markers = Object.values(parks).map((park) => ({
      lat: park.location.latitude,
      lng: park.location.longitude,
      name: park.name,
    }));

    markers.forEach((marker) => {
      new maps.Marker({
        position: { lat: marker.lat, lng: marker.lng },
        map: map,
        title: marker.name,
      });
    });
  };

  const apiIsLoaded = (map, maps) => {
    renderMarkers(map, maps);
  };

  useEffect(() => {
    // Call the renderMarkers function immediately
    const mapRef = document.querySelector('.google-map-react');
    if (mapRef) {
      const mapInstance = mapRef.getMap();
      const mapsInstance = mapRef.getMaps();
      if (mapInstance && mapsInstance) {
        renderMarkers(mapInstance, mapsInstance);
      }
    }
  }, []);

  return (
    <div style={{ height: '30rem', width: '70rem' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCaDJuOV60ZndmKjCNiUvY2M3BBMEVsUYc' }}
        defaultCenter={{
          lat: 40.748333,
          lng: -73.985278,
        }}
        defaultZoom={12.7}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
      />
    </div>
  );
};

export default Map;
