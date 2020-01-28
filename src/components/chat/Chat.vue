<template>
  <div class="chat__container">
    <template v-if="messages && messages.length">
      <ChatMessage v-for="message in messages" :key="message.id" :message="message"
                   :self="message.from.id === user.id"/>
    </template>
    <template v-else>
      No Message
    </template>
  </div>

</template>

<script>
  import ChatMessage from './ChatMessage'
  import { mapGetters, mapState } from 'vuex'

  export default {
    name: 'Chat',
    data () {
      return {
        data: [1, 2, 3, 4, 5, 6]
      }
    },
    props: ['contact'],
    components: {
      ChatMessage
    },
    computed: {
      ...mapState({
        chatStore: 'ChatStore'
      }),
      ...mapGetters({
        user: 'UserStore/getUser'
      }),
      messages (){
        return this.$store.getters['ChatStore/getBeaf'](this.contact.id)
      }
    },
    watch: {
      messages: {
        immediate: true,
        handler (e) {
          setTimeout(() => {
            const data = document.querySelector('.chat__container')
            data.scrollTop = data.scrollTopMax
          }, 1)
        }
      }
    }
  }
</script>

<style scoped>
  .chat__container {
    /*border: 1px solid green;*/
    overflow-y: auto;
    padding: 0 20px;
  }
</style>
