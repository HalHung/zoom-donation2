<template>
  <div class="login-box mr-auto mb-5">
    <btn-fb @done="success"></btn-fb>
    <div class="text-center my-3">或</div>
    <div class="form">
      <div class="form-group"> <input
          type="text"
          class="form-control"
          :class="{'is-invalid':errors.has('email')}"
          name="email"
          v-model="form.email"
          v-validate="'required'"
          placeholder="電子郵件"
          autofocus
        >
        <div
          v-show="errors.has('email')"
          class="invalid-feedback"
        >{{ errors.first('email') }}</div>
      </div>
      <div class="form-group"> <input
          type="password"
          class="form-control"
          :class="{'is-invalid':errors.has('password')}"
          v-model="form.password"
          name="password"
          v-validate="'required|min:6'"
          placeholder="密碼"
          autofocus
        >
        <div class="invalid-feedback">{{ errors.first('password') }}</div>
      </div>
      <div class="login-footer text-center mt-5 px-5">
        <div class="form-group ">
          <button
            type="submit"
            @click="login"
            class="btn btn-block btn-primary"
          >確認</button>
        </div>
        <div class="action mt-3">
          <a
            href="#"
            @click.prevent="route2('forgot')"
          >忘記密碼</a>
          <a
            href="#"
            @click.prevent="route2('register')"
          >註冊</a>
          <!-- <router-link  :to="{name:'forgot'}">忘記密碼</router-link> -->
          <!-- <router-link :to="{name:'register'}">註冊</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btnFb from '@/components/btn-fb';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
export default {
  name: 'account-login-form',
  inject: {
    $validator: '$validator'
  },
  components: {
    btnFb
  },
  data () {
    return {
      isVuedals: false,
      form: {
        // email: 'domoidea.design@gmail.com',
        // password: '111111'
        // email: 'api_test@xxx.xxx',
        // password: 'api_test'
        email: '',
        password: ''
      }
    };
  },

  created () {
    this.isVuedals = this.$parent.vuedals;
    let myself = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        myself.success();
      }
    })
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

    success () {
      if (this.isVuedals) {
        this.$vuedals.close({
          $index: 0
        });
      } else {
        this.route2('home.index');
      }
    },

    login () {
      this.$store.dispatch('auth/login', this.form).then(res => {
        console.log(res);
        this.success();
      });
    }

}
};
</script>
