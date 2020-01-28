<template>
  <div class="dashboard__contact">
    <div>
      <h3 class="font-weight-bold">Cynachat</h3>
    </div>
    <div class="search position-relative d-flex align-items-center">
      <b-form-input v-model="text" placeholder="Search Here..."/>
    </div>
    <div>
      <ul class="friends" v-if="chatStore.contacts.length">
        <li v-for="(contact, k) in chatStore.contacts" :key="k" @click="process(contact)" :class="{active: contact.id===selected, cursor: true}">
          <div class="profile__image" :style="`--bg-url: url(${imageUrl}/${contact.image})`">
          </div>
          <div>
            <p class="font-weight-bold">{{contact.username}}</p>
            <p>Status</p>
          </div>
          <p>2:35</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'Contacts',
    data () {
      return {
        text: '',
        imageUrl: process.env.VUE_APP_IMG_URL,
        selected: null
      }
    },
    methods: {
      ...mapActions({
        getContacts: 'ChatStore/getContact',
      }),
      process (e){
        this.$emit('selectedContact', e)
        this.selected = e.id
      }
    },
    computed: {
      ...mapState({
        store: 'UserStore',
        chatStore: 'ChatStore'
      }),
    },
    mounted () {
      this.getContacts()
    }
  }
</script>

<style scoped>

</style>
