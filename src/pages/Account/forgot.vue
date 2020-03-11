<template>
  <v-layout>
    <template slot="necker">
      <banner :img="'member_banner.jpg'"></banner>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{path:'/'}">Home</router-link>
        </li>
        <li class="breadcrumb-item active">忘記密碼</li>
      </ol>
    </template>
    <template slot="page-title">
      <h1>忘記密碼</h1>
    </template>
    <template slot="body">
      <div class="container container-xs"
        v-loading="isLoading">
        <div class="login-box mr-auto mb-6">
          <p class="text-center">您將收到一封電郵，請依照裡面的指示重設密碼。</p>
          <div class="form">
            <div class="form-group"> <input type="text"
                class="form-control text-center"
                :class="{'is-invalid':errors.has('email')}"
                name="email"
                v-model="form.email"
                v-validate="'required|email'"
                placeholder="EMAIL"
                autofocus>
              <div v-show="errors.has('email')"
                class="invalid-feedback">{{ errors.first('email') }}</div>
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
import btnFb from '@/components/btn-fb';
export default {
  name: 'account-index',
  inject: {
    $validator: '$validator'
  },
  components: {
    VLayout, banner, btnFb

  },
  data () {
    return {
      isLoading: false,
      form: {
        email: '',

      }

    }
  },
  methods: {
    submit () {
      this.$validator.validate().then(result => {
        if (result) {
          this.isLoading = true
          this.$store.dispatch('account/reqResetPassword', this.form).then(res => {
            this.isLoading = false
            console.log(res);
          })
        }
      });
    }

  }
};
</script>
