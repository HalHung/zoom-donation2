<template>
  <v-layout>
    <template slot="necker">
      <hero></hero>
    </template>
    <template slot="body">
      <div class="section-var section text-white">
        <div class="container ">
          <div class="row">
            <div class="col-md-6">
              <div class="para clearfix">
                <h3>多變曲風 </h3>
                <p class="mt-5">提供數十種音樂曲風</p>
                <p class="mt-3"> 開啟一段心靈的旅程，搭乘多變的音樂風格: 爵士、搖滾 、民謠、R&B、抒情、吉他、鋼琴、電音、沙發音樂、中國風、管絃樂...，華麗呈現。</p>
              </div>
            </div>
            <div class="col-md-6"><img src="@/assets/img/index_headset.png"
                alt=""></div>
          </div>
        </div>
      </div>
      <vis></vis>
      <music></music>
      <div class="section-surprise section  text-white px-5 py-5">
        <div class="bg"
          :style="{'background-image' : 'url(' + imgSurprise + ')'}"></div>
        <div class="py-5 text-center para clearfix">
          <h3 class="display-5">每月驚喜</h3>
          <p class="mt-5">每月新曲上架</p>
          <p class="mt-3">每月新的期待，新的聆聽經驗、新的視覺旅程</p>
        </div>
      </div>
      <planprice id="price-section"></planprice>

    </template>
  </v-layout>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import VLayout from '@/layouts/Default';
import music from '../Home/music';
import hero from '../Home/hero';
import planprice from '../Home/planprice';
import vis from '../Home/vis';
import plan from '@/pages/checkout/plan';
export default {
  name: 'plan-index',
  computed: {
    imgSurprise: function () {
      return require('@/assets/img/index_surprise.jpg')
    }
  },
  created () {
    this.$store.dispatch('global/fetchPay', { id: this.$route.params.plan }, {
      root: true
    });
    this.$vuedals.open({
      name: 'upgrade',
      title: '',
      props: {
        planId: this.$route.params.plan
      },

      component: plan
    });
  },
  components: {
    VLayout, music, hero, planprice, vis

  },
};
</script>
<style lang="scss" >
@import "../../assets/scss/custom-bootstrap.scss";

.section-var {
  background-image: linear-gradient(to right, #f26c22 0%, #ffcf00 100%);
  background-repeat: repeat-x;
  img {
    height: 600px;
  }
  .para {
    margin-top: 100px;
  }
}
.para {
  padding: 2rem;
  position: relative;
}
</style>