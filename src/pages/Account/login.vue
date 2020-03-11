<template>
  <v-layout>
    <template slot="necker">
      <banner :img="'member_banner.jpg'"></banner>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{path:'/'}">Home</router-link>
        </li>
        <li class="breadcrumb-item active">登入</li>
      </ol>
    </template>
    <template slot="page-title">
      <h1>登入</h1>
    </template>
    <template slot="body">
      <div class="container container-xs mb-6">
        <Login-Form></Login-Form>
      </div>
    </template>
  </v-layout>
</template>

<script>
import VLayout from '@/layouts/Default';
import banner from '@/pages/_part/banner';

import LoginForm from './login-form';
export default {
  name: 'account-login',
  components: {
    banner,
    LoginForm,
    VLayout
  }
};
</script>