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
      <div v-if="loading" class="spinner"></div>
      <GenAIInputBox v-model:loading="loading" @sendMessage="handleSendMessage" @userEnteredMessage="handleUserMessage"/>
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
      messages: [
        {
          text: "Welcome to Innovest Generative AI assistant! Ask me a question about ETFs or stocks to begin.",
          type: 'system'
        },
      ],
      loading: false
    };
  },
  methods: {
    handleUserMessage(userMessage) {
      this.messages.push({ text: userMessage, type: 'user' });
    },
    async handleSendMessage({ userMessage, genAiResponse }) {
      if (!userMessage || !genAiResponse) {
        return;
      }
      this.loading = true;
      try {
        this.messages.push({ text: '', type: 'system' });
      } finally {
        this.loading = false;
      }
      let i = 0
      const intervalId = setInterval(() => {
        let tokenLength = parseInt((Math.random()*10)%5)
        tokenLength = tokenLength===0 ? 1 : tokenLength
        let word = genAiResponse.Response.substring(i, i + tokenLength)
        i += tokenLength
        this.messages[this.messages.length-1].text += word
        if(i > genAiResponse.Response.length) {
          clearInterval(intervalId)
        }
      }, 10)
    }
  }
};
</script>

