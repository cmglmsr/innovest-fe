<template>
  <div class="genai-view">
    <Navbar />
    <div class="background-img"></div>
    <div class="chat-container">
      <GenAIMessageBox
        v-for="(message, index) in messages"
        :key="index"
        :text="message.text"
        :type="message.type"
      />
      <div v-if="loading" class="relative left-0 mx-auto bg-red-500 w-32 h-32">LOADING</div>
      <GenAIInputBox v-model:loading="loading" @sendMessage="handleSendMessage" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import GenAIInputBox from "@/components/GenAIInputBox/GenAIInputBox.vue";
import GenAIMessageBox from "@/components/GenAIMessageBox/GenAIMessageBox.vue";
import "./style.css";

export default {
  name: "GenAIView",
  components: {
    Navbar,
    GenAIInputBox,
    GenAIMessageBox,
  },
  data() {
    return {
      messages: [],
      loading: false
    };
  },
  methods: {
    handleSendMessage(userMessage) {
      this.messages.push({ text: userMessage, type: 'user' });
      this.generateSystemResponse(userMessage);
    },
    generateSystemResponse(userMessage) {
      const systemResponse = userMessage;
      this.messages.push({ text: systemResponse, type: 'system' });
    }
  }
};
</script>
