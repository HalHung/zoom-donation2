<template>
  <nav class="navbar navbar-expand-md  fixed-top "
    :class="{'invert' : isReading }">
    <div class="container">
      <router-link class="navbar-brand"
        :to="{path:'/'}"><img :src="logo"
          alt=""> </router-link>
      <!-- <ul class="navbar-nav ml-auto">
        <li class="nav-item mr-3">
          <el-dropdown trigger="click"
            @command="handleCommand">
            <span class="btn btn-primary btn-icon">
              <i class="fa fa-info"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="privacy_policy">隱私權條款</el-dropdown-item>
              <el-dropdown-item command="terms_of_service">服務條款</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li class="nav-item">
          <el-dropdown trigger="click"
            @command="handleCommand">
            <span class="btn btn-primary btn-icon">
              <i class="fa fa-user"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-if="!isAuth"
                command="login">登入</el-dropdown-item>
              <el-dropdown-item v-if="!isAuth"
                command="register">註冊</el-dropdown-item>
              <el-dropdown-item v-if="isAuth"
                command="profile">帳戶管理</el-dropdown-item>
              <el-dropdown-item v-if="isAuth"
                command="logout">登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul> -->
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      isReading: false
    };
  },
  computed: {
    logo () {
      return this.isReading
        ? require('@/assets/img/index_logo_invert.png')
        : require('@/assets/img/index_logo.png');
    },
    ...mapGetters({
      me: 'auth/me',
      isAuth: 'auth/isAuth'
    })
  },
  methods: {
    handleCommand (command) {
      switch (command) {
        case 'login':
          this.$router.push({
            name: 'login'
          });
          break;
        case 'register':
          this.$router.push({
            name: 'register'
          });
          break;
        case 'logout':
          this.logout();
          break;
        case 'profile':
          this.$router.push({
            name: 'account.profile'
          });
          break;
        case 'privacy_policy':
          this.$router.push({
            name: 'page',
            params: {
              slug: 'privacy_policy'
            }
          });
          break;
        case 'terms_of_service':
          this.$router.push({
            name: 'page',
            params: {
              slug: 'terms_of_service'
            }
          });
          break;
      }
    },

    logout () {
      this.$store.dispatch('auth/logout').then(res => {
        this.$router.push({
          name: 'login'
        });
      });
    },
    handleScroll (e) {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      this.isReading = top > 100;
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
<style lang="stylus" scoped>
.navbar {
  background-color: transparent;

  .navbar-nav {
    flex-direction: row;
  }

  &.invert {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }

  .navbar-brand {
    height: 50px;

    img {
      height: 100%;
    }
  }
}
</style>
