import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ref, inject } from "vue";
let map = ref("");

export const useLocation = (parmsLocation) => {
  const defaultLocation = {
    location: [23.92275, 120.98979],
    zoom: 8,
  };

  Object.assign(defaultLocation,parmsLocation);

  map = L.map("map").setView(
    defaultLocation.location,
    defaultLocation.zoom
  );
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: import.meta.env.VITE_API_ACCESSTOKEN,
    }
  ).addTo(map);
  const popup = L.popup()
    .setLatLng([23.92275, 120.98979])
    .setContent("I am a standalone popup.")
    .openOn(map);
  };

  export const generateMarker = (bikeLand_Bicycle) => {
    bikeLand_Bicycle.map(data=>{
      L.marker([
        data.StationPosition.PositionLat,
        data.StationPosition.PositionLon,
      ]).addTo(map);
    })
  };