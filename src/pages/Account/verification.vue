<template>
  <v-layout>
    <template slot="necker">
      <banner :img="'member_banner.jpg'"></banner>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{path:'/'}">Home</router-link>
        </li>
        <li class="breadcrumb-item active">驗證信箱</li>
      </ol>
    </template>
    <template slot="page-title">
      <h1>驗證信箱</h1>
    </template>
    <template slot="body">
      <div class="container container-xs"
        v-loading="isLoading">
        <div class="login-box mr-auto mb-6">
          <p class="text-center">{{result}}</p>
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
  name: 'account-verification',
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
      result: ''
    };
  },
  methods: {
    submit () {}
  },

  created () {
    this.isLoading = true;
    this.$store
      .dispatch('auth/validationMail', {
        token: this.$route.query.token
      })
      .then(res => {
        if (res.status === 200) {
          this.result = '成功驗證信箱，請登入APP。';
        } else {
          this.result = res.data.message;
        }
        this.isLoading = false;
      });
  }
};
</script>
