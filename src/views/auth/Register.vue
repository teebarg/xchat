<template>
  <div class="login__wrapper">
    <h1 class="header">
      Create an Account
    </h1>
    <div class="main my-4">
      <div class="content">
        <b-form @submit.prevent="onSubmit">
          <b-form-group id="input-group-1" label="Email" label-for="email">
            <b-form-input
              id="email"
              v-model.trim="$v.form.email.$model"
              type="email"
              required
              placeholder="Enter email"
              :state="!$v.form.email.$error"
            />
            <b-form-invalid-feedback v-if="$v.form.email.$dirty" :state="$v.form.email.required && $v.form.email.$dirty">
              {{!$v.form.email.required ? 'Email is Required': 'Enter a valid Email'}}
            </b-form-invalid-feedback>
            <span class="invalid-feedback d-block" v-if="errors && errors.email">{{errors.email[0]}}</span>
          </b-form-group>

          <b-form-group id="input-group-5" label="Username" label-for="username">
            <b-form-input
              id="username"
              v-model.trim="$v.form.username.$model"
              required
              placeholder="E.g Beaf2020"
              :state="!$v.form.username.$error"
            />
            <b-form-invalid-feedback v-if="$v.form.username.$dirty" :state="$v.form.username.required && $v.form.username.$dirty">
              Username is Required
            </b-form-invalid-feedback>
            <span class="invalid-feedback d-block" v-if="errors && errors.username">{{errors.username[0]}}</span>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password" label-for="password">
            <b-form-input
              id="password"
              v-model.trim="$v.form.password.$model"
              required
              placeholder="Enter password"
              :state="!$v.form.password.$error"
            />
            <b-form-invalid-feedback v-if="$v.form.password.$dirty" :state="$v.form.password.required && $v.form.password.$dirty">
              {{!$v.form.password.required ? 'Password is Required':`Password must have atleast ${$v.form.password.$params.minLength.min}`}}
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="input-group-3" label="Confirm Password" label-for="repeatPassword">
            <b-form-input
              id="repeatPassword"
              v-model.trim="$v.form.repeatPassword.$model"
              required
              placeholder="Confirm Password"
              :state="!$v.form.repeatPassword.$error"
            />
            <b-form-invalid-feedback v-if="$v.form.repeatPassword.$dirty" :state="$v.form.repeatPassword.sameAsPassword && $v.form.repeatPassword.$dirty">
              Passwords must be identical.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="input-group-6" label="Mobile" label-for="mobile">
            <b-input-group prepend="+234">
              <b-form-input
              id="mobile"
              v-model.trim="$v.form.mobile.$model"
              required
              placeholder="e.g 8101456987"
              :state="!$v.form.mobile.$error"
              type="number"
              />
            </b-input-group>
            <b-form-invalid-feedback v-if="$v.form.mobile.$dirty" :state="$v.form.mobile.required && $v.form.mobile.$dirty">
              Phone Number is Required
            </b-form-invalid-feedback>
            <span class="invalid-feedback d-block" v-if="errors && errors.mobile">{{errors.mobile[0]}}</span>
          </b-form-group>

          <div class="d-flex align-items-center">
            <b-button type="submit" style="min-width: 125px" variant="primary" pill>Sign Up</b-button>
            <p class="mb-0 ml-4 forgot__text">
              Have you forgot your password? <router-link to="/">Click Here</router-link>
            </p>
          </div>
        </b-form>
        <p class="my-1 px-1 divider">Or</p>
        <Social/>
        <div class="mt-2">
          <p class="ptm">By creating a Mailtrap account, you agree to our
            <a target="_blank" rel="noopener noreferrer" href="/terms">
              Terms of Service
            </a> and
            <a target="_blank" rel="noopener noreferrer" href="/privacy">
              Privacy Policy
            </a>. We'll occasionally send you account related emails.
          </p>
        </div>
      </div>
      <div class="sidenote">
        <div class="mb-4">
          <div class="sidenote__image">
            <img src="/images/mastercard.png" alt="No Image">
          </div>
          <p> <strong>No</strong> Credit card required</p>
        </div>
        <div>
          <div class="sidenote__image">
            <img src="/images/contract.png" alt="No Image">
          </div>
          <p> <strong>No</strong> Contract Needed</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Social from '../../components/shared/Social'
import { email, minLength, required, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'Register',
  data () {
    return {
      form: {
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
        mobile: '',
        remember: true
      },
      errors: null
    }
  },
  methods: {
    onSubmit () {
      alert('yo')
      this.login(this.form)
    },
    ...mapActions({
      login: 'UserStore/signup'
    })
  },
  components: {
    Social
  },
  computed: {
    ...mapGetters({
      getErrors: 'AppStore/getErrors'
    })
  },
  watch: {
    getErrors: {
      handler (event) {
        this.errors = event
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      username: { required },
      mobile: { required },
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  }
}
</script>

<style scoped>
  .login__wrapper {
    width: 50%;
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
    padding: 25px 15px;
    background-color: #e1fff9;
    color: #099;
    line-height: 1.5;
    border-radius: 20px;
    align-self: self-start;
    /*margin: 0 0 0 35px;*/
  }

  .sidenote > div {
    display: flex;
    align-items: center;
  }

  .sidenote > div p {
    line-height: 1.2;
  }

  .sidenote__image {
    background: #FFFFFF;
    border-radius: 50%;
    padding: 10px;
    margin-right: 5px;
  }

  .sidenote__image img {
    width: 30px;
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
