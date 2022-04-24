import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "virtual:generated-pages";
import "./index.css";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
// QQ.component("tooltip", {
//   template: `
//      <div class="markerTooltip">
//     <h5 class="text-smear-green font-bold text-lg">幹</h5>
//     <div class="flex items-center">
//       <div class="border bg-data-smear-green rounded-lg py-1 px-2">
//         <div class="flex items-center">
//           <i-mdi-bicycle class="mr-1" />
//           <p class="text-center text-xl text-[#474f2c]">
//             123
//           </p>
//         </div>
//       </div>
//       <div class="border bg-data-smear-green rounded-lg py-1 px-2">
//         <div class="flex items-center">
//           <i-mdi-parking class="mr-1" />
//           <p class="text-center text-xl text-[#474f2c]">
//             456
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   `,
// });