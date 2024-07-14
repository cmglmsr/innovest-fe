<template>
  <div>
    <Navbar/>
    <div class="background-img"></div>
    <GenAIInputBox/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import GenAIInputBox from '@/components/GenAIInputBox/GenAIInputBox.vue';
import "./style.css";


export default {
  name: "GenAIView",
  components: {
    Navbar,
    GenAIInputBox
  },
};
</script>

