import { ref,reactive } from "vue";
import { getAvailability } from "@/logic/api/core";

const switchState = ref("");

const useBicycle = () => {
  const availabilityData = reactive({});
  const qq = async () =>
    (
      await getAvailability({
        city: "Kaohsiung",
        filter: "AvailableRentBikes gt 0",
      })
    ).data;
    return {
      qq
    }
}
export { switchState, useBicycle };
