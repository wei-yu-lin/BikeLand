div
<template>
  <div class="container px-4 py-6 h-full">
    <div class="flex flex-row">
      <div class="input-group">
        <input
          class="search-input relative"
          placeholder="搜尋站點或鄰近地點"
          type="text"
          name="search"
        />
        <span class="absolute inset-y-0 right-0 flex items-center pr-2">
          <svg class="h-5 w-5 fill-gray-50">
            <i-ic-twotone-search />
          </svg>
        </span>
      </div>
      <button
        class="flex text-sm items-center px-1 whitespace-nowrap bg-white text-smear-green font-bold rounded border-2 ease-in-out duration-300 border-smear-green hover:drop-shadow-md active:bg-smear-green active:text-white"
      >
        <i-fa-solid-sort-amount-down class="mr-1" />排序
      </button>
    </div>
    <!-- 資料顯示 -->
    <ul class="overflow-y-scroll mt-4 box-border h-full">
      <li
        class="border-b-2 border-gray-400 space-y-3.5"
        v-for="(data, index) in bikeLand_Bicycle"
        :key="`bicycle_${index}`"
      >
        <h5 class="text-smear-green text-lg">{{ data.StationName }}</h5>
        <section class="flex justify-evenly">
          <div class="border bg-data-smear-green rounded-lg py-4 px-6">
            <div class="flex items-center">
              <i-mdi-bicycle class="mr-1" />
              <span class="text-[#474f2c] whitespace-nowrap">可租借</span>
            </div>
            <p class="text-center text-xl text-[#474f2c]">
              {{ data.AvailableRentBikes }}
            </p>
          </div>
          <div class="border bg-data-smear-green rounded-lg py-4 px-6">
            <div class="flex items-center">
              <i-mdi-parking class="mr-1" />
              <span class="text-[#474f2c] whitespace-nowrap">可停車</span>
            </div>
            <p class="text-center text-xl text-[#474f2c]">
              {{ data.AvailableReturnBikes }}
            </p>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";
const searchBicycle = inject("searchBicycle");
const bikeLand_Bicycle = inject("bikeLand_Bicycle");
searchBicycle({
  city: "Kaohsiung",
  filter: "AvailableRentBikes gt 0 ",
});
const aaa = ((_Rent, _Return) => {
  if (_Rent > 0 && _Return > 0) {
    return "可借可還";
  } else if (_Rent > 0 && _Return == 0) {
    return "只可借車";
  } else if (_Rent == 0 && _Return > 0) {
    return "只可停車";
  } else {
    return "站點施工中";
  }
});
</script>

<style lang="postcss" scoped>
.search-input {
  @apply placeholder:italic placeholder:text-slate-400 bg-slate-200 w-full border mr-2 border-slate-300 rounded-md pl-3 pr-6 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm;
}
.input-group {
  @apply relative flex flex-wrap items-stretch w-full;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.5);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
