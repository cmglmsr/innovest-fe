<template>
  <div class="input-container">
    <input
      v-model="userMessage"
      type="text"
      placeholder="Type your message..."
      class="input-box"
      @keydown.enter="sendMessage"
    />
    <button class="send-button" @click="sendMessage" :disabled="isButtonDisabled">
      <i class="fas fa-paper-plane"></i>
    </button>
  </div>
</template>

<script>
import "./style.css";
import { testRequest } from "@/services/testService.js";
import {sendPrompt} from "@/services/genAiService.js";

export default {
  name: "GenAIInputBox",
  data() {
    return {
      userMessage: "",
      genAIResponse: "",
    };
  },
  computed: {
    isButtonDisabled() {
      return this.userMessage.trim().length === 0;
    },
  },
  methods: {
    async sendMessage() {
      if (this.isButtonDisabled) return;

      this.$emit("update:loading", true);
      this.genAIResponse = await sendPrompt({ text: this.userMessage });
      this.$emit("update:loading", false);
      if (this.genAIResponse) {
        this.$emit("sendMessage", {userMessage: this.userMessage, genAiResponse: this.genAIResponse});
        this.userMessage = "";
      }
    },
  },
};
</script>
