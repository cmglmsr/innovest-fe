<template>
    <div :class="['message-box', type]">
      <span v-if="type === 'user'" class="message-prompt">User:</span>
      <span v-if="type === 'system'" class="message-prompt">Innovest AI:</span>
      {{ text }}
    </div>
  </template>
  
  <script>
  import "./style.css";
  
  export default {
    name: "GenAIMessageBox",
    props: {
      text: String,
      type: String,
    },
    mounted() {
      this.scrollToBottom();
    },
    updated() {
      this.scrollToBottom();
    },
    methods: {
      scrollToBottom() {
        const container = this.$el.parentElement;
        container.scrollTop = container.scrollHeight;
      },
    },
  };
  </script>
  