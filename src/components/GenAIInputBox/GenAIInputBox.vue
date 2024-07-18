<template>
  <div class="input-container">
    <input v-model="userMessage" type="text" placeholder="Type your message..." class="input-box" @keydown.enter="sendMessage"/>
    <button class="send-button" @click="sendMessage">
      <i class="fas fa-paper-plane"></i>
    </button>
  </div>
</template>

<script>
import "./style.css";
import {testRequest} from "@/services/testService.js";

export default {
  name: "GenAIInputBox",
  data() {
    return {
      userMessage: '',
      genAIResponse: '',
    };
  },
  props: {
    loading: {

    }
  },
  methods: {
    async sendMessage() {
      this.$emit('update:loading', true)
      this.genAIResponse = await testRequest({userMessage: this.userMessage})
      this.$emit('update:loading', false)
      if (this.userMessage.trim()) {
        this.$emit('sendMessage', this.userMessage);
        this.userMessage = '';
      }
    }
  }
};
</script>
