import { GET } from "../requestHeaders";

const defaultFilter = "ServiceStatus eq 1";

function formatRequestUrl(url, param) {
  const { city, ...keys } = param;
  if (city) url += `/${city}`;
  keys.filter += ` and ${defaultFilter}`;
  return (
    url +
    "?$format=JSON" +
    Object.keys(keys).reduce((resp, key) => `${resp}&$${key}=${keys[key]}`, "")
  );
}

export const getAvailability = (parmas) =>
  GET(formatRequestUrl("/Availability", parmas));
