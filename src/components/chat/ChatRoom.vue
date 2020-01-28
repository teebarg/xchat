<template>
    <div class="dashboard__chat">
      <template v-if="contact">
        <ChatHeader :user="contact" />
        <Chat :contact="contact"/>
      </template>
      <Input @messageTyped="userInput($event)" />
    </div>
</template>

<script>
  import Input from './Input'
  import Chat from './Chat'
  import ChatHeader from './ChatHeader'
  import echo from '../../plugins/pusher'
  import { mapActions, mapGetters, mapState } from 'vuex'

  export default {
    name: 'ChatRoom',
    props: ['contact'],
    data (){
      return {
        messages: [],
        currentUser: null
      }
    },
    components: {
      Input,
      Chat,
      ChatHeader
    },
    methods: {
      ...mapActions({
        getMessages: 'ChatStore/getMessages',
        sendMessage: 'ChatStore/sendMessage',
        updateMessage: 'ChatStore/updateMessage'
      }),
      userInput (e) {
        this.sendMessage({ message: e, to: this.contact.id })
      }
    },
    computed: {
      ...mapState({
        chatStore: 'ChatStore'
      }),
      ...mapGetters({
        user: 'UserStore/getUser',
      })
    },
    watch: {
      user: {
        immediate: true,
        handler (user) {
          this.currentUser = user
        }
      },
      contact: {
        immediate: false,
        handler (contact) {
          const target = contact.id
          this.getMessages(target)
          if (echo) {
            echo.private(`message-${this.currentUser.id}-${target}`)
              .listen('MessageSentEvent', (e) => {
                this.updateMessage({ target: target, payload: e })
              })
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
