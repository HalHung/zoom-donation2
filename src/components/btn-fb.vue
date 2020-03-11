<template>
  <a href="#"
    @click="submit"
    class="btn  btn-block">
    <i class="fa fa-facebook"></i> 以 Facebook 帳戶登入 </a>
</template>
<script>
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
export default {

  name: 'fa-login',
  methods: {
    submit () {
      /*
      let vm = this
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      provider.addScope('email');
      firebase.auth().useDeviceLanguage();
      firebase.auth().signInWithRedirect(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        if (!user.email) {
          vm.$message({
                message: '無法取得EMAIL,請採用其他方式登入或重新設定您的FB的EMAIL',
                type: 'error'
              })
        } else {
          vm.$store.dispatch('auth/status')
          .then(res => {
                vm.$emit('done')
          })
        }
        // ...
      }).catch(function (reason) {
        vm.$message({
          message: reason.message,
          type: 'error'
        })
      });
      */
      /*
      window.FB.login(function (response) {
        if (response.status === 'connected') {
          window.FB.api('/me', 'GET', { fields: 'email' }, function (res) {
            if (!res.email) {
              vm.$message({
                message: '無法取得EMAIL,請採用其他方式登入或重新設定您的FB的EMAIL',
                type: 'error'
              })
            } else {
              vm.$store.dispatch('auth/fbLogin', {
                email: res.email,
                fbid: res.id,
              }).then(res => {
                vm.$emit('done')
              })
            }
          });
        }
        // error
      }, { scope: 'public_profile,email' })
      */
    }
  },
  created () {

  }

};
</script>
<style lang="scss" scoped>
.btn {
  background: #4267b2;
  color: #fff;
  border-radius: 5px;
  &:hover {
    background: #35518a;
    color: #fff;
  }
}
</style>
