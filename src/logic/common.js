import { ref, reactive, computed } from "vue";
import { getAvailability, getStation } from "@/logic/api/core";

const switchState = ref("");

const useBicycle = () => {
  const bikeAvailabilityData = [];
  const bikeStationData = [];
  const bikeLand_Bicycle = reactive([]);

  const searchBicycle = async (condition) => {
    try {
      bikeAvailabilityData.push(...(await getAvailability(condition)).data);
      bikeStationData.push(
        ...(await getStation({ city: condition.city })).data.map(
          (bikeStationItem) => ({
            ...bikeStationItem,
            StationName :bikeStationItem.StationName.Zh_tw.replace(/_|ˍ/g, "").replace(
                /YouBike1.0|YouBike2.0|iBike1.0 /g,
                ""
              )
          })
        )
      );

      bikeLand_Bicycle.push(
        ...bikeAvailabilityData.map((bikeAvailabilityItem) => ({
          ...bikeAvailabilityItem,
          ...bikeStationData.find(
            (bikeStationItem) =>
              bikeStationItem.StationUID === bikeAvailabilityItem.StationUID
          ),
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    searchBicycle,
    bikeLand_Bicycle,
  };
};

export { switchState, useBicycle };
