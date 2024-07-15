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

export default {
  name: "GenAIInputBox",
  data() {
    return {
      userMessage: ''
    };
  },
  methods: {
    sendMessage() {
      if (this.userMessage.trim()) {
        this.$emit('sendMessage', this.userMessage);
        this.userMessage = '';
      }
    }
  }
};
</script>
