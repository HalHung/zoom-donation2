<template>
  <v-layout>
    <template slot="necker">
      <banner :img="'member_banner.jpg'"></banner>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{path:'/'}">Home</router-link>
        </li>
        <li class="breadcrumb-item active">會員專區</li>
      </ol>
    </template>
    <template slot="page-title">
      <h1>帳戶</h1>
    </template>
    <template slot="body">
      <router-view></router-view>
    </template>
  </v-layout>
</template>
<script>
import VLayout from '@/layouts/Default';
import banner from '@/pages/_part/banner';
export default {
  name: 'account-index',
  components: {
    VLayout, banner
  },
};
</script>
