<template>
  <v-layout>
    <template slot="necker">
      <banner :img="'member_banner.jpg'"></banner>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{path:'/'}">Home</router-link>
        </li>
        <li class="breadcrumb-item active">相關說明</li>
      </ol>
    </template>
    <template slot="page-title">
      <h1>相關說明</h1>
    </template>
    <template slot="body">
      <div class="container"
        v-html="content"></div>
    </template>
  </v-layout>
</template>
<script>
import VLayout from '@/layouts/Default';
import banner from '@/pages/_part/banner';
import API from '@/api/';

export default {
  name: 'page',
  components: {
    VLayout, banner

  },
  data () {
    return {
      content: null
    }
  },
  watch: {
    '$route': function () {
      this.fetch()
    }
  },
  methods: {
    fetch () {
      API.page.getPage({
        slug: this.$route.params.slug
      }).then(res => {
        if (res.status === 200) {
          this.content = res.data.content
        } else {
          this.$message({
            type: 'error',
            message: res.data.message
          })
        }
      })
    }
  },
  created () {
    this.fetch()
  }

}
</script>

