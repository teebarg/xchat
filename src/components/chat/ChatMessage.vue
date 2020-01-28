<template>
  <div class="chat-message__wrapper" :class="self ? 'self' : ''">
    <div class="message">
      {{message.message}}
    </div>
    <div class="icon">
      <img :src="imageUrl + message.from.image" alt="No Image">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatMessage',
    data (){
      return {
        imageUrl: process.env.VUE_APP_IMG_URL
      }
    },
    props: ['self', 'message']
  }
</script>

<style scoped>
  .chat-message__wrapper {
    margin-top: 5px;
    display: grid;
    grid-template-areas: 'm1 m2' 'm3 m4';
    grid-template-columns: auto 1fr;
  }

  .chat-message__wrapper > .message {
    background-color: #fefce9;
    padding: 5px;
    border-radius: 5px 5px 5px 0;
    grid-area: m2;
    margin-left: 5px;
    max-width: 50%;
    font-weight: bold;
  }

  .chat-message__wrapper.self > .message {
    border-radius: 5px 5px 0 5px;
    background: #ffffff;
  }

  .chat-message__wrapper > .icon {
    height: 45px;
    width: 45px;
    background: purple;
    grid-area: m3;
    border-radius: 50%;
    display: flex;
  }

  .chat-message__wrapper > .icon img {
    width: 100%;
    border-radius: inherit;
  }

  .self{
    direction: rtl;
  }

  /*.chat-message__wrapper:before {*/
  /*  content: '';*/
  /*  height: 50px;*/
  /*  width: 50px;*/
  /*  background: purple;*/
  /*}*/
</style>
