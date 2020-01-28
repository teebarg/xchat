<template>
  <div class="chat-header__container">
    <template v-if="user">
      <div class="profile__info">
        <div class="icon">
          <img :src="imageUrl + user.image" alt="No Image">
        </div>
        <div class="details">
          <p>{{user.username}}</p>
          <p>Active</p>
        </div>
      </div>
      <i class="fas fa-phone filled__icon mr-1" />
      <i class="fas fa-video filled__icon" />
    </template>
  </div>
</template>

<script>
  export default {
    name: 'ChatHeader',
    data (){
      return {
        imageUrl: process.env.VUE_APP_IMG_URL
      }
    },
    props: {
      user: Object,
      default: { username: 'TestUser' }
    }
  }
</script>

<style scoped>
  .chat-header__container {
    box-shadow: 0 5px 5px -5px #ccc;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    border-bottom: 1px solid #00000020;
    align-items: center;
    padding: 10px;
    background: #ffffff;
  }

  .chat-header__container .profile__info {
    display: flex;
    align-items: center;
  }
  .chat-header__container .profile__info .details p{
    line-height: 1;
  }

  .icon {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    display: flex;
  }

  .icon img {
    width: 100%;
    border-radius: inherit;
  }
</style>
