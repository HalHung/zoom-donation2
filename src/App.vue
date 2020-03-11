<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <vuedal></vuedal>
  </div>
</template>
<script>
/* ============
 * Entry Point
 * ============
 *
 * The entry point of the application
 */
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import { Component as Vuedal } from 'vuedals-submit';
// Your web app's Firebase configuration
/*
var firebaseConfig = {
  apiKey: 'AIzaSyBBLTBG-BHF71ihDWgIYbxNglG5j_VKfzU',
  authDomain: 'star-music-9e086.firebaseapp.com',
  databaseURL: 'https://star-music-9e086.firebaseio.com',
  projectId: 'star-music-9e086',
  storageBucket: 'star-music-9e086.appspot.com',
  messagingSenderId: '707360417645',
  appId: '1:707360417645:web:8baedd9187e0aece'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
*/
export default {
  /**
   * The name of the application.
   */
  name: 'vue-starmusic',
  components: {
    Vuedal
  },
  created () {
    this.$store.dispatch('global/resetPayList', null, {
      root: true
    });
    // const myself = this;
    // firebase.auth().useDeviceLanguage()
    /*
    firebase.auth().onAuthStateChanged(function (user) {
      console.log(user);
      myself.$store.dispatch('auth/status', null, {
        root: true
      });
    })
    */
    /* eslint-disable  */
    /*
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '213526259398893',
        xfbml: true,
        version: 'v2.10'
      });
      window.FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/zh_TW/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
    */
  }
};
</script>
<style lang="scss">
@import "./assets/scss/custom-bootstrap.scss";
@import "./assets/scss/app.scss";

@import "../node_modules/bootstrap/scss/bootstrap.scss";

@import "./node_modules/bootstrap/scss/mixins/_breakpoints.scss";
.vuedal {
  @include media-breakpoint-down(sm) {
    width: 90%;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>