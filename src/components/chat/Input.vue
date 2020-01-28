<template>
  <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" class="input__form">
    <b-input-group class="mt-auto">
      <b-input-group-prepend>
        <span @click="check">
          <i class="far fa-smile" />
        </span>
        <span @click="check">
          <i class="fas fa-file-image"/>
        </span>
      </b-input-group-prepend>
      <b-form-input v-model="message"/>
      <b-input-group-append>
        <span @click="check">
          <i class="fas fa-location-arrow filled__icon"/>
        </span>
      </b-input-group-append>
    </b-input-group>
  </b-form>
</template>

<script>
  export default {
    name: 'Input',
    data () {
      return {
        message: ''
      }
    },
    methods: {
      check () {
        alert('sssss')
      },
      onSubmit () {
        this.$emit('messageTyped', this.message)
        this.onReset()
      },
      onReset () {
        this.message = ''
      }
    }
  }
</script>

<style scoped>

  .input__form {
    margin: 0 20px;
  }

  input[type='text'] {
    outline: none;
    box-shadow: none !important;
    border: none;
  }

  span {
    background: #fff;
    border: none;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .input-group-append span {
    border-radius: 0 50% 50% 0;
  }

  .input-group-prepend span:first-child {
    border-radius: 50% 0 0 50%;
  }
</style>
