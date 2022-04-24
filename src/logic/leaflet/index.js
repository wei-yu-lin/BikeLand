import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ref } from "vue";
// import TooltipCard from '@/components/Core/TooltipCard.vue'
let map = ref("");

export const useLocation = (parmsLocation) => {
  const defaultLocation = {
    location: [23.92275, 120.98979],
    zoom: 8,
  };

  const finalLocation = Object.assign(defaultLocation, parmsLocation);
  console.log("finalLocation=", finalLocation);
  map = L.map("map").setView(finalLocation.location, finalLocation.zoom);
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
};

export const generateMarker = (bikeLand_Bicycle) => {
  const iconDisabled = new URL("../../assets/disabled.svg", import.meta.url)
    .href;
  const iconLimit = new URL("../../assets/limit.svg", import.meta.url).href;
  const iconNormal = new URL("../../assets/normal.svg", import.meta.url).href;
  bikeLand_Bicycle.map((data) => {
    if (data.AvailableRentBikes > 5) {
      L.marker(
        [data.StationPosition.PositionLat, data.StationPosition.PositionLon],
        {
          icon: new L.DivIcon({
            className: "",
            html: `
          <div class="iconWrapper">
            <img class="iconImage" src="${iconNormal}"/>
            <span class="iconNormal">${data.AvailableRentBikes}</span>
            你好
          </div>
            `,
          }),
        }
      )
        .bindTooltip(tooltip, {
          direction: "up",
          permanent: false,
          sticky: false,
          offset: [10, 0],
          opacity: 1,
        })
        .openTooltip()
        .addTo(map);
    } else if (data.AvailableRentBikes <= 5 && data.AvailableRentBikes > 0) {
      L.marker(
        [data.StationPosition.PositionLat, data.StationPosition.PositionLon],
        {
          icon: new L.DivIcon({
            className: "",
            html: `
          <div class="iconWrapper">
            <img class="iconImage" src="${iconLimit}"/>
            <span class="iconLimit">${data.AvailableRentBikes}</span>
          </div>
            `,
          }),
        }
      ).addTo(map);
    } else {
      L.marker(
        [data.StationPosition.PositionLat, data.StationPosition.PositionLon],
        {
          icon: new L.DivIcon({
            className: "",
            html: `
          <div class="iconWrapper">
            <img class="iconImage" src="${iconDisabled}"/>
            <span class="iconDisable">${data.AvailableRentBikes}</span>
          </div>
            `,
          }),
        }
      ).addTo(map);
    }
  });
};

export const Geolocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      map.setView(pos, 22);
      const popup = L.popup()
        .setLatLng([pos.lat, pos.lng])
        .setContent("I am here.")
        .openOn(map);
    });
  } else {
    // Browser doesn't support Geolocation
  }
};
