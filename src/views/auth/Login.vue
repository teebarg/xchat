<template>
  <div class="login__wrapper">
    <h1 class="header">
      Log In
    </h1>
    <div class="main my-4">
      <div class="content">
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Email"
            label-for="email"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="email"
              v-model.trim="$v.form.email.$model"
              type="email"
              required
              placeholder="Enter email"
              :state="!$v.form.email.$error"
            />
            <b-form-invalid-feedback v-if="$v.form.email.$dirty" :state="$v.form.email.required && $v.form.email.$dirty">
              {{!$v.form.email.required ? 'Email is Required':'Enter a valid Email'}}
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password" label-for="password">
            <b-form-input
              id="password"
              v-model.trim="$v.form.password.$model"
              required
              type="password"
              placeholder="Enter password"
              :state="!$v.form.password.$error"
            />
            <b-form-invalid-feedback v-if="$v.form.password.$dirty" :state="$v.form.password.required && $v.form.password.$dirty">
              {{!$v.form.password.required ? 'Password is Required':`Password must have atleast ${$v.form.password.$params.minLength.min}`}}
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox v-model="form.remember" size="sm">Remember Me</b-form-checkbox>
          </b-form-group>
          <div class="d-flex align-items-center">
            <b-button type="submit" style="min-width: 125px" variant="primary" pill>Log In</b-button>
            <p class="mb-0 ml-4 forgot__text">
              Have you forgot your password? <router-link to="/">Click Here</router-link>
            </p>
          </div>
        </b-form>
        <p class="my-1 px-1 divider">Or</p>
        <Social/>
      </div>
      <div class="sidenote">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dignissimos  ipsam, iusto mollitia quis vero.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Social from '../../components/shared/Social'
import { mapActions } from 'vuex'
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: '',
        remember: true
      }
    }
  },
  methods: {
    onSubmit () {
      this.login(this.form)
    },
    ...mapActions({
      login: 'UserStore/login'
    })
  },
  components: {
    Social
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  }
}
</script>

<style scoped>
  .login__wrapper {
    /*min-height: 150vh;*/
    /*border: 1px solid green;*/
    width: 50%;
    /*border: 1px solid;*/
    justify-self: center;
    display: block;
    padding: 70px 25px 50px;
  }
  .header {
    grid-area: h1;
  }
  .main {
    display: grid;
    grid-template-areas: 's1 s2';
    grid-template-columns: 2fr 1fr;
    grid-gap: 40px;
  }
  .content {
    grid-area: s1;
  }
  .sidenote {
    grid-area: s2;
    margin-top: 24px;
    padding: 25px 30px;
    background-color: #fefce9;
    line-height: 1.5;
    border-radius: 20px;
    align-self: self-start;
    /*margin: 0 0 0 35px;*/
  }
  .divider {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 10px;
    color: #b6b3b3;
  }
  .divider::before,
  .divider::after{
    content: '';
    border: 2px dashed #efefef;
    align-self: center;
  }
  .forgot__text a{
      color: #00caca;
  }
</style>
