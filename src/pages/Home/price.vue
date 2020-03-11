<template>
  <div class="price-section section py-5 ">
    <div
      class="bg"
      :style="{'background-image' : 'url(' + imgCost + ')'}"
    ></div>
    <!-- <div class="section-header">
      <h2 class="">為何澈見幸福需要您支持？</h2>
      <p class="mt-3">一直以來澈見幸福都是堅持作為跟大家一起增上的佛法學習平台，今後依然如此！</p>
      <p class="mt-3">隨時間過去，看著平台上面的資料、以及使用人數越來越多，我們很隨喜大家能夠一同學法修行。</p>
      <p class="mt-3">為了提供大家更好用及資料更豐富的學習平台，希望大家能贊助澈見幸福的營運及開發。</p>
      <p class="mt-3">澈見幸福團隊依然會繼續努力，提供大家免費而且是好用的學法工具。</p>
      <p class="mt-3">因此澈見幸福提供了贊助項目，讓發心的善友們能夠一起參與營運學習平台的共業，</p>
      <p class="mt-3">成為護持教法長久住世的助伴，一起為師父、老師的心願努力！</p>
    </div> -->
    <div class="container container-sm">

      <div class="card-deck">
        <!-- <div
        class="card-deck"
        v-if="!paidRole"
      > -->
        <div
          class="card"
          v-for="(item,k) in packs"
          :key="k"
        >
          <div class="card-header ">
            <h3>{{item.name}}</h3>
            <p
              class="card-text text-muted"
              v-html="item.description"
            ></p>
          </div>
          <div class="card-body">
            {{item.priceInfo}}
            <div class="card-title">
              <button class="btn btn-primary" @click="amount=100">100元</button>
              <button class="btn btn-primary" @click="amount=300">300元</button>
              <button class="btn btn-primary" @click="amount=500">500元</button>
              <button class="btn btn-primary" @click="amount=1000">1000元</button>
            </div>
            <div class="card-text">
              <el-input-number placeholder="自訂金額" :min=100 :max=100000 :step=50 v-model="customAmount" @change="customAmountChange"></el-input-number>
            </div>
          </div>
          <div class="card-footer">
            <button
              @click="selectPack(item.id)"
              class="btn btn-primary"
              :disabled = "amount == null"
            >
              <span v-if="amount == null">立即贊助</span>
              <span v-else>立即贊助{{amount}}元</span>

            </button>
          </div>
        </div>
      </div>
      <!-- <div class="card mt-3">
        <div class="card-body pb-1">
          <h4>廣告贊助方案</h4>
          <p>讓您的廣告顯示在澈見幸福上，觸及更多群眾！！</p>
        </div>
        <div class="card-footer">
          <button
            @click="toggleSpecial()"
            class="btn btn-primary"
          >點我看更多</button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import upgrade from '@/pages/checkout/upgrade';
// import gift from './gift';

export default {
  name: 'price',
  data () {
    return {
      customAmount: undefined,
      selected: null,
      amount: null
    };
  },
  computed: {
    ...mapGetters({
      // 取得資料夾列表
      packs: 'global/packs',
      isAuth: 'auth/isAuth',
      role: 'auth/role',
      me: 'auth/me'
    }),
    paidRole () {
      console.log(this.me);
      if (!this.me.role) return false;
      return parseInt(this.me.role) > 0;
    },
    imgCost: function () {
      return require(`@/assets/img/index_cost.jpg`);
    }
  },
  methods: {
    customAmountChange (currentValue, oldValue) {
      this.amount = currentValue;
    },
    toggleBuy () {
      this.$vuedals.open({
        name: 'upgrade',
        title: '信用卡授權',
        props: {
          planId: this.selected,
          amount: this.amount
        },

        component: upgrade
      });
    },
    // toggleGift () {
    //   this.$vuedals.open({
    //     name: 'upgrade',
    //     title: 'STAR 心禮卡',
    //     props: {

    //     },
    //      footer: {
    //       hidden: true
    //     },
    //     component: require('./gift').default,
    //   });
    // },
    toggleSpecial () {
      this.$vuedals.open({
        name: 'Special',
        title: '廣告贊助方案',
        props: {

        },
         footer: {
          hidden: true
        },
        component: require('./special').default,
      });
    },
    // toggleLogin (next) {
    //    this.$vuedals.open({
    //      name: 'login',
    //      title: '會員登入',
    //      footer: {
    //        hidden: true
    //      },
    //      component: require('@/pages/Account/login-form').default,
    //      onDismiss: () => {},
    //      onClose: () => {
    //        if (next) next();
    //      }
    //    });
    // },
    selectPack (type) {
      console.log(type);
      var next = this.toggleBuy;
      this.selected = type;
      // if (!this.isAuth) {
      //   this.toggleLogin(this.selected === 'normal' ? null : next);
      // } else {
        next();
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/custom-bootstrap.scss";
.card {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.card-header {
  background: transparent;
  border-bottom-width: 0;
  text-align: center;
  padding: 3rem 1rem 0;
  h3 {
    border-bottom: 1px solid $primary;
    padding: 1rem 0 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    font-weight: bold;
  }
}

.card-body {
  text-align: center;
  padding: 2rem 0;
  font-size: 1.6rem;
  p {
    font-size: 1.2rem;
  }
}
.card-footer {
  background: transparent;
  border-top-width: 0;
  text-align: center;
  padding: 1rem 0 3rem;
}

.section-header {
  max-width: 760px;
  margin: 40px auto 0;
  padding: 3rem 2rem;
  text-align: unset;
}
</style>
