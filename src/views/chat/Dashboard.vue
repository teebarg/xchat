<template>
  <div style="display: grid; background: #00000010;">
    <div class="dashboard__container">
      <Contacts @selectedContact="processSelected($event)" />
      <ChatRoom :contact="contact"/>
      <Profile />
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import ChatRoom from '../../components/chat/ChatRoom'
  import Contacts from '../../components/chat/Contacts'
  import Profile from '../../components/chat/Profile'

  export default {
    name: 'Dashboard',
    data () {
      return {
        contact: null
      }
    },
    components: {
      ChatRoom,
      Contacts,
      Profile
    },
    methods: {
      ...mapActions({
        me: 'UserStore/me'
      }),
      processSelected (e){
        this.contact = e
      }
    },
    created () {
      this.me()
    }
  }
</script>

<style scoped>

</style>
