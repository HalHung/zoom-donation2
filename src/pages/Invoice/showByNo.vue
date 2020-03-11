<template>
   <v-layout v-loading.fullscreen.lock="isLoading"
    element-loading-text="信用卡授權結果確認中">
    <template slot="necker">
      <hero></hero>
    </template>
    <template slot="body">
      <div class="section-var section text-white">
        <div class="container ">
          <div class="row">
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
          </div>
        </div>
      </div>
      <vis></vis>
      <!-- <music></music> -->
      <div class="section-surprise section  text-white px-5 py-5">
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
      </div>
    </template>
  </v-layout>
</template>
<script>
import music from '../Home/music';
import hero from '../Home/hero';
import vis from '../Home/vis';
import VLayout from '@/layouts/Default';
import { mapGetters } from 'vuex';
import {
  Message
} from 'element-ui';
export default {
    name: 'invoice-show-by-no',
    watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
    },
    created () {
        this.getInvoiceInfo();
        this.timer = setInterval(this.getInvoiceInfo, 3000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
    data () {
      return {
        status: '',
        message: '',
        plan: {},
        isLoading: true,
        timer: '',
        retryCount: 0
      };
    },
    computed: {
        ...mapGetters({
            // 取得資料夾列表
            invoice: 'invoice/invoice',
        }),
        imgSurprise: function () {
            return require('@/assets/img/index_surprise.jpg')
        }
    },
    components: {
        VLayout, music, hero, vis
    },
    methods: {
      getInvoiceInfo () {
        const self = this;
        return this.$store.dispatch('invoice/fetchInvoice', { no: this.$route.params.no }, {
            root: true
        }).then(function (res) {
            self.status = res.data.status;
            self.message = res.data.message;
            self.plan = res.data.plan;
        }).then(() => {
          if (self.message === '成功取得3D HTML') {
              self.retryCount += 1;
              if (self.retryCount >= 5) {
                self.route2('home.index');
                Message({
                  message: `信用卡授權驗證失敗，請洽澈見幸福客服人員！`,
                  type: 'error',
                  duration: 0,
                  showClose: true
                })
              }
          } else if (self.status === 'SUCCESS' && self.message === '授權成功') {
              self.route2('home.index');
              Message({
                message: `刷卡成功！ 您已成功${self.plan.name}！`,
                type: 'success',
                duration: 0,
                showClose: true
              })
            } else {
              self.route2('home.index');
              Message({
                message: `${self.message}！`,
                type: 'error',
                duration: 0,
                showClose: true
              })
            }
        });
      },
      route2 (name) {
          if (this.isVuedals) {
              this.$vuedals.dismiss({
              $index: 0
              });
          }
          this.$router.replace({
              name: name
          });
      }
    }
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
