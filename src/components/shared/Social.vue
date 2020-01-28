<template>
    <div class="social__wrapper">
      <b-button class="social__btn" type="submit" pill @click="handleGoogleClick">
        <img src="/images/google.svg" alt="">
        <span>
          Use <span class="font-weight-bolder">Google account</span>
        </span>
      </b-button>
      <b-button class="social__btn mt-2" type="submit" variant="primary" pill @click="handleFbClick">
        <img src="/images/facebook.png" alt="">
        <span>
          Use <span class="font-weight-bolder">Facebook account</span>
        </span>
      </b-button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Social',
  methods: {
    ...mapActions({
      login: 'UserStore/social'
    }),
    handleGoogleClick () {
      let f = this.login
      window.gapi.auth2.getAuthInstance().signIn().then(
        function (googleuser) {
          const tokenId = googleuser.getAuthResponse().access_token
          const type = 'google'
          f({ tokenId, type })
        }
      )
    },
    handleFbClick () {
      let f = this.login
      window.FB.login(function ({ authResponse, status }) {
        if (status === 'connected') {
          const type = 'facebook'
          const tokenId = authResponse.accessToken
          f({ tokenId, type })
        }
      }, { scope: 'public_profile,email', auth_type: 'rerequest' })
    }
  }
}
</script>

<style scoped>
  .social__wrapper {
    padding: 5px 20px;
  }
.social__btn {
  min-height: 58px;
  min-width: 100%;
  background: #efefef;
  border: none;
  color: #69636b;
  box-shadow: none;
}
  .social__btn:hover,
  .social__btn:active,
  .social__btn:focus{
    background: #e5e5e5;
    color: #69636b;
    border: none;
    box-shadow: none;
  }
  .social__btn img {
    /*max-height: 40px;*/
    margin-right: 10px;
  }
</style>
