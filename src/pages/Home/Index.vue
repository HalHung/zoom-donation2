<template>
  <v-layout>
    <template slot="necker">
      <hero></hero>
    </template>
    <template slot="body">
      <div class="section-var section text-white">
        <div class="container ">
          <!-- <div class="row">
            <div class="col-md-6">
              <div class="para clearfix">
                <h3>三大功能 </h3>
                <p class="mt-5">- 我的功課：聽帶、背書、誦經、開示影片，都可放入個人學習清單。</p>
                <p class="mt-3">- 澈見學堂直播：法師開示、營隊課程、心靈提升，各種精彩內容都可以在澈見學堂直播中觀賞，即時學習。</p>
                <p class="mt-3">- 增上生決定勝資料：師父音檔、老師開示、讚頌練習、四家合註、幸福十堂課，散落各地的資訊幫你整合起來，滿足你的精進行！</p>
              </div>
            </div>
            <div class="col-md-6"><img src="@/assets/img/index_headset.png"
                alt=""></div>
          </div> -->
        </div>
      </div>
      <vis></vis>
      <!-- <music></music> -->
      <!-- <div class="section-surprise section  text-white px-5 py-5">
        <div class="bg"
          :style="{'background-image' : 'url(' + imgSurprise + ')'}"></div>
        <div class="py-5 para2 clearfix">
            <h3 class="display-5">六大特色</h3>
            <p class="mt-5">- 推播功能：即時資訊、最新消息不漏接！</p>
            <p class="mt-3">- 影音資料：沒有聽到開示？沒有跟到直播？在這裡都幫您整理好了！</p>
            <p class="mt-3">- 時間碼標記：方便操作，反覆聽聞更容易！</p>
            <p class="mt-3">- 電子書：外出通勤，想誦經卻不方便帶書？電子書功能更方便隨時閱覽！</p>
            <p class="mt-3">- 收藏最愛：依照自己的喜好收藏，幫助您隨時隨地都能精進用功，而且最新上架的內容也會即時通知您，跟著幸福走！</p>
            <p class="mt-3">- 聚沙成塔：業已造不失壞，直播不在現場也可以回饋心得，供養師長！</p>
        </div>
      </div> -->
      <price id="price-section"></price>

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
import music from './music';
import hero from './hero';
import price from './price';
import vis from './vis';
export default {

  name: 'home-index',
  computed: {
    imgSurprise: function () {
      return require('@/assets/img/index_surprise.jpg')
    }
  },

  components: {
    VLayout, music, hero, price, vis

  },
};
</script>
<style lang="scss" >
@import "../../assets/scss/custom-bootstrap.scss";

.section-var {
  background-image: linear-gradient(to right, #1a2445 0%, #4152b5 100%);
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
}

.para2 {
  max-width: 700px;
  padding-left: 3rem;
  padding-right: 2rem;
  // margin-right: 200px;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  // .background {
  // }
}
</style>
