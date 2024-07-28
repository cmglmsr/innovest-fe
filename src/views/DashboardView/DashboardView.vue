<template>
    <div class="genai-view">
      <Navbar />
      <div class="background-img"></div>
      <TradingViewWidget />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar/Navbar.vue";
  import TradingViewWidget from "./TradingViewWidget.vue"; 
  import "./style.css";
  
  export default {
    name: "GenAIView",
    components: {
      Navbar,
      TradingViewWidget
    },
    data() {
      return {};
    },
    methods: {}
  };
  </script>
  
  