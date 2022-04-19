import { GET } from "../requestHeaders";

const defaultFilter = "ServiceStatus eq 1 & $top = 10";

function formatRequestUrl(url, param) {
  const { city, ...keys } = param;
  if (city) url += `/${city}`;
  if (keys.filter) keys.filter += ` and ${defaultFilter}`;
  
  return (
    url +
    "?$format=JSON" +
    Object.keys(keys).reduce((resp, key) => `${resp}&$${key}=${keys[key]}`, "")
  );
}
// Bicycle
export const getAvailability = (parmas) =>
  GET(formatRequestUrl("/Availability", parmas));

export const getStation = (parmas) =>
  GET(formatRequestUrl("/Station", parmas));
