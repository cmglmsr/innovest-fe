<template>
  <div class="dashboard-view">
    <Navbar />
    <div class="background-img"></div>
    <Carousel>
      <template #slide1>
        <TradingViewWidget1 />
      </template>
      <template #slide2>
        <TradingViewWidget2 />
      </template>
    </Carousel>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import TradingViewWidget1 from "./TradingViewWidget1.vue";
import TradingViewWidget2 from "./TradingViewWidget2.vue";
import Carousel from "./Carousel.vue"; 
import "./style.css";

export default {
  name: 'DashboardView',
  components: {
    Navbar,
    TradingViewWidget1,
    TradingViewWidget2,
    Carousel,
  },
};
</script>