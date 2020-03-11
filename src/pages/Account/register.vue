<template>
  <v-layout>
    <template slot="necker">
      <banner :img="'member_banner.jpg'"></banner>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{path:'/'}">Home</router-link>
        </li>
        <li class="breadcrumb-item active">註冊</li>
      </ol>
    </template>
    <template slot="page-title">
      <h1>註冊</h1>
    </template>
    <template slot="body">
      <div class="container container-xs"
        v-loading="isLoading">
        <div class="login-box mr-auto mb-6">
          <btn-fb @done="success"></btn-fb>
          <div class="text-center my-3">或</div>
          <div class="form">
            <div class="form-group"> <input type="text"
                class="form-control"
                :class="{'is-invalid':errors.has('email')}"
                name="email"
                v-model="form.email"
                v-validate="'required|email'"
                placeholder="電子郵件"
                autofocus>
              <div v-show="errors.has('email')"
                class="invalid-feedback">{{ errors.first('email') }}</div>
            </div>
            <div class="form-group"> <input type="text"
                class="form-control"
                :class="{'is-invalid':errors.has('nickname')}"
                name="nickname"
                v-model="form.nickname"
                placeholder="暱稱"
                autofocus>
              <div v-show="errors.has('nickname')"
                class="invalid-feedback">{{ errors.first('nickname') }}</div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group"> <input type="password"
                    v-model="form.password"
                    class="form-control"
                    :class="{'is-invalid':errors.has('password')}"
                    name="password"
                    v-validate="'required|min:6|confirmed:confirmPassword'"
                    placeholder="密碼"
                    autofocus>
                  <div class="invalid-feedback">{{ errors.first('password') }}</div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group"> <input type="password"
                    class="form-control"
                    :class="{'is-invalid':errors.has('confirmPassword')}"
                    name="confirmPassword"
                    v-validate="'required'"
                    placeholder="確認密碼"
                    autofocus>
                  <div class="invalid-feedback">{{ errors.first('confirmPassword') }}</div>
                </div>
              </div>
            </div>
            <!-- <div class="form-group"> <input type="text"
                class="form-control"
                :class="{'is-invalid':errors.has('phone')}"
                name="phone"
                v-model="form.phone"
                v-validate="'min:8'"
                placeholder="電話"
                autofocus>
              <div v-show="errors.has('phone')"
                class="invalid-feedback">{{ errors.first('phone') }}</div>
            </div> -->
            <div class="login-footer text-center mt-5 px-5">
              <div class="form-group ">
                <button type="submit"
                  @click.prevent="submit"
                  class="btn btn-block btn-primary">確認</button>
              </div>
              <div class="action mt-3">
                <router-link :to="{name:'forgot'}">忘記密碼?</router-link>
                <span> | </span>
                <router-link :to="{name:'login'}"> 已有帳號?</router-link>
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
import btnFb from '@/components/btn-fb';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import { Progress } from 'element-ui';
export default {
  name: 'account-index',
  inject: {
    $validator: '$validator'
  },
  components: {
    VLayout,
    banner,
    btnFb
  },
  data () {
    return {
      isLoading: false,
      confirmPassword: '',
      form: {
        nickname: '',
        email: '',
        password: '',
        phone: ''
      }
    };
  },
  methods: {
    route2 (name) {
      if (this.isVuedals) {
        this.$vuedals.dismiss({
          $index: 0
        });
      }
      this.$router.push({
        name: name
      });
    },
    submit () {
      this.$validator.validate().then(result => {
        if (result) {
          this.isLoading = true;
          this.$store.dispatch('auth/register', this.form).then(res => {
            // this.isLoading = true;
            this.isLoading = false;
            // setTimeout(() => {
            //   this.$router.push({
            //     name: 'login',
            //   });
            // }, 3000);
          });
        }
      });
    },
    success () {
      if (this.isVuedals) {
        this.$vuedals.close({
          $index: 0
        });
      } else {
        this.route2('home.index');
      }
    },
  },
  created () {
    /*
    let myself = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        myself.success();
      }
    })
    */
  }
};
</script>
