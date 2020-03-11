<template>
  <v-layout>
    <template slot="necker">
      <banner :img="'member_banner.jpg'"></banner>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{path:'/'}">Home</router-link>
        </li>
        <li class="breadcrumb-item active">重設密碼</li>
      </ol>
    </template>
    <template slot="page-title">
      <h1>重設密碼</h1>
    </template>
    <template slot="body">
      <div class="container container-xs">
        <div class="login-box mr-auto mb-6">
          <p class="text-center">請輸入您的新密碼。</p>
          <div class="form">
            <div class="form-group"> <input type="password"
                v-model="form.password"
                class="form-control"
                :class="{'is-invalid':errors.has('password')}"
                name="password"
                v-validate="'required|min:6|confirmed:confirmPassword'"
                data-vv-as="密碼"
                placeholder="密碼">
              <div class="invalid-feedback">{{ errors.first('password') }}</div>
            </div>
            <div class="form-group"> <input type="password"
                class="form-control"
                v-model="confirmPassword"
                :class="{'is-invalid':errors.has('confirmPassword')}"
                name="confirmPassword"
                data-vv-as="確認密碼"
                v-validate="'required'"
                placeholder="確認密碼">
              <div class="invalid-feedback">{{ errors.first('confirmPassword') }}</div>
            </div>
            <div class="login-footer text-center mt-5 px-5">
              <div class="form-group ">
                <button type="submit"
                  @click="submit"
                  class="px-5 btn  btn-primary">確認</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </v-layout>
</template>

<script>
import VLayout from '@/layouts/Default';
import banner from '@/pages/_part/banner';
// import { Message } from 'element-ui'

export default {
  name: 'account-index',
  inject: {
    $validator: '$validator'
  },
  components: {
    VLayout, banner

  },
  data () {
    return {

      confirmPassword: '',
      form: {
        password: '',
      }

    }
  },
  methods: {

    submit () {
      this.$validator.validate().then(res => {
        if (res) {
          this.$store.dispatch('account/resetPassword', {
            pw: this.form.password,
            token: this.$route.query.token
          }).then(res => {
            setTimeout(() => {
              this.$router.push({
                name: 'login'
              })
            }, 1000);
          })
        }
      });
    }

  }
};
</script>
