<template>
  <div class="price-section section py-5 ">
    <div
      class="bg"
      :style="{'background-image' : 'url(' + imgCost + ')'}"
    ></div>
    <div class="section-header">
      <h2 class="text-white">立即享受音樂的陪伴</h2>
    </div>
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
          <div
            class="card-body"
            v-html="item.priceInfo"
          ></div>
          <div class="card-footer">

            <button
              @click="selectPack(item.id)"
              :disabled="Object.keys(me).length > 0 && me.memberType.id != 1"
              class="btn btn-primary"
            >
              <span v-if="Object.keys(me).length > 0 && me.memberType.id != 1">{{me.memberType.name}} </span>
              <span v-else>立即體驗</span>
            </button>
          </div>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-body pb-1">
          <h4>優惠方案</h4>
          <p>夢蓮花之友，享獨家「年費半價」優惠！</p>
        </div>
        <div class="card-footer">
          <button
            @click="toggleSpecial()"
            class="btn btn-primary"
          >點我看更多</button>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-body pb-1">
          <h4>禮物卡專區</h4>
          <p>Star 心禮卡 暖暖送到你心裡</p>
        </div>
        <div class="card-footer">
          <button
            @click="toggleGift()"
            class="btn btn-primary"
          >點我看更多</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import gift from './gift';
import plan from '@/pages/checkout/plan';
export default {
  name: 'planprice',
  data () {
    return {
      selected: null
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
    toggleBuy () {
      this.$vuedals.open({
        name: 'upgrade',
        title: '方案',
        props: {
          planId: this.selected
        },

        component: plan
      });
    },
    toggleGift () {
      this.$vuedals.open({
        name: 'upgrade',
        title: 'STAR 心禮卡',
        props: {

        },
         footer: {
          hidden: true
        },
        component: require('./gift').default,
      });
    },
    toggleSpecial () {
      this.$vuedals.open({
        name: 'Special',
        title: '優惠方案',
        props: {

        },
         footer: {
          hidden: true
        },
        component: require('./special').default,
      });
    },
    toggleLogin (next) {
       this.$vuedals.open({
         name: 'login',
         title: '會員登入',
         footer: {
           hidden: true
         },
         component: require('@/pages/Account/login-form').default,
         onDismiss: () => {},
         onClose: () => {
           if (next) next();
         }
       });
    },
    selectPack (type) {
      console.log(type);
      var next = this.toggleBuy;
      this.selected = type;
      next();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/custom-bootstrap.scss";
.card {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
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
</style>
