import { ref, reactive } from "vue";
import { getAvailability, getStation } from "@/logic/api/core";

const switchState = ref("");

const useBicycle = () => {
  const bikeAvailabilityData = reactive([]);
  const bikeStationData = reactive([]);
  const bikeLand_Bicycle = reactive([]);
  const searchBicycle = async (condition) => {
    bikeAvailabilityData.push(...(await getAvailability(condition)).data);
    bikeStationData.push(...(await getStation({ city: condition.city })).data);
    bikeAvailabilityData.forEach((bikeAvailabilityItem) => {
      bikeStationData.forEach((bikeStationItem) => {
        if (bikeAvailabilityItem.StationUID === bikeStationItem.StationUID) {
          bikeAvailabilityItem.StationName =
            bikeStationItem.StationName.Zh_tw.replace(/_|ˍ/g, "").replace(
              /YouBike1.0|YouBike2.0|iBike1.0 /g,
              ""
            );
          bikeLand_Bicycle.push(bikeAvailabilityItem);
        }
      });
    });
  };

  return {
    searchBicycle,
    bikeLand_Bicycle,
  };
};

export { switchState, useBicycle };
