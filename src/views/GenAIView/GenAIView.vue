<template>
  <div>
    <Navbar />
    <div class="background-image"></div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import "./style.css";

export default {
  name: "GenAIView",
  components: {
    Navbar,
  },
};
</script>
