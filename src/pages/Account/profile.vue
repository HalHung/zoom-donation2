<template>
  <div class="container container-sm">
    <div class="block">
      <div class="block-header">會員資料與收費</div>
      <div class="block-body">

        <accordion>
          <template slot="title">{{form.profile.email}}</template>
          <template slot="btn">更改基本資料</template>
          <div slot="body">
            <div class="form">
              <div class="form-group">
                <label for="">暱稱</label> <input
                  v-model="form.profile.nickname"
                  type="text"
                  placeholder="暱稱"
                  name="nickname"
                  v-validate="'required'"
                  class="form-control"
                  :class="{'is-invalid':errors.has('nickname')}"
                >
                <div
                  v-show="errors.has('nickname')"
                  class="invalid-feedback"
                >{{ errors.first('nickname') }}</div>
              </div>
              <!-- <div class="form-group">
                <label for="">舊密碼</label> <input v-model="form.profile.oldPassword"
                  type="password"
                  placeholder="舊密碼(不須修改請留空白)"
                  class="form-control"
                  v-validate="'required'"
                  name="oldPassword"
                  :class="{'is-invalid':errors.has('oldPassword')}">
                <div v-show="errors.has('oldPassword')"
                  class="invalid-feedback">{{ errors.first('oldPassword') }}</div>
              </div> -->
              <div
                class="form-group"
                v-if="me.regType !=='FB'"
              >
                <label for="">新密碼 ( 6 至 12 個字元 )</label> <input
                  v-model="form.profile.password"
                  type="password"
                  placeholder="新密碼"
                  class="form-control"
                  v-validate="'required|min:6|max:12|confirmed:confirmPassword'"
                  name="password"
                  :class="{'is-invalid':errors.has('password')}"
                >
                <div
                  v-show="errors.has('password')"
                  class="invalid-feedback"
                >{{ errors.first('password') }}</div>
              </div>
              <div
                class="form-group"
                v-if="me.regType !=='FB'"
              >
                <label for="">確認密碼</label> <input
                  v-model="confirmPassword"
                  type="password"
                  placeholder="確認密碼"
                  class="form-control"
                  v-validate="'required'"
                  name="confirmPassword"
                  :class="{'is-invalid':errors.has('confirmPassword')}"
                >
                <div
                  v-show="errors.has('confirmPassword')"
                  class="invalid-feedback"
                >{{ errors.first('confirmPassword') }}</div>
              </div>
              <!-- <div class="form-group">
                <label for="">電話</label> <input v-model="profile.phone"
                  type="text"
                  placeholder="電話"
                  class="form-control"
                  v-validate="'min:8'"
                  name="phone"
                  :class="{'is-invalid':errors.has('phone')}">
                <div v-show="errors.has('phone')"
                  class="invalid-feedback">{{ errors.first('phone') }}</div>
              </div> -->
              <div class="form-group">
                <button
                  class="btn btn-primary"
                  @click="updateProfile"
                >修改基本資料</button>
              </div>
            </div>
          </div>
        </accordion>
        <!-- <accordion>
          <template slot="title"> 優惠身分 </template>
          <template slot="btn"> 修改優惠身分 </template>
          <div slot="body">
            <coupon-input></coupon-input>
          </div>
        </accordion> -->
      </div>
    </div>
    <div class="block">
      <div class="block-header">會員層級 </div>
      <div class="block-body">

        <div class="accordion clearfix">
          <div class="accordion-header">
            <div
              class="title"
              style="font-weight:bold"
            >{{me.memberType.name}}

            </div>
            <!-- 
            {{me}}

            {{payList}}
            <div
              v-for="payItem in payList"
              :key="payItem.id"
            >
              {{payItem.name}} : <span v-html="payItem.desc"></span>

            </div> -->
          </div>
          <!---->
        </div>

        <!-- <accordion>
          <div
            class="paid"
            v-if="form.pack.id"
          > </div>
          <template
            slot="title"
            v-if="myPack"
          > {{myPack.name}} :
            <span v-html="myPack.desc"></span>
          </template>
        <template slot="btn">
             更改會員層級  
          </template>
          <div slot="body">
            <template v-if="!isPaid">
              <upgrade ref="upgrade"></upgrade>
              <div class="form-group">
                <button class="btn btn-primary"
                  @click="pay">修改會員層級</button>
              </div>
            </template>
            <template v-else>
              <div class="note">
                <p>更換會員層級說明</p>
                <p>使用 Google 產品時，您可以匯出及下載帳戶中存放的資料，例如您的電子郵件、日曆和相片。只要幾個簡單步驟，就能建立封存檔案，將這些資料留存備查或提供其他服務使用。</p>
                <p>注意：下載完成後，您的資料並不會從 Google 伺服器中刪除。瞭解如何刪除您的帳戶或刪除您的搜尋記錄和瀏覽活動。</p>
              </div>
            </template>
          </div>
        </accordion> -->
      </div>
    </div>
    <!-- <div class="block">
      <div class="block-header">EMAIL 通知設定 </div>
      <div class="block-body">
        <div class="form">
          <div class="form-group">
            <div class="custom-control custom-checkbox"> <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              >
              <label
                class="custom-control-label"
                for="customCheck1"
              >我願意接收EMAIL通知</label>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import _ from 'lodash';
import accordion from '@/components/accordion';
// import packList from '@/pages/_part/packs/list';
import upgrade from '@/pages/checkout/upgrade';
import couponInput from '@/pages/Account/coupon';

import { mapGetters } from 'vuex';
import API from '@/api/';
export default {
  name: 'account-profile',
  computed: {
    ...mapGetters({
      // 取得資料夾列表
      me: 'auth/me',
      packs: 'global/packs',
      payList: 'global/PayList',
    }),
    isPaid () {
      return this.me.role && parseInt(this.me.role) > 0;
    }
  },

  inject: {
    $validator: '$validator'
  },
  components: {
    couponInput,
    accordion,
    upgrade
  },

  data () {
    return {
      confirmPassword: '',

      myPack: null,
      form: {
        profile: {
          id: '',
          nickname: '',
          phone: '',
          email: '',
          password: ''
        },
        pack: {}
      }
    };
  },
  methods: {
    getProfile () {
      API.account.getProfile({}).then(res => {
        let me = res.data;
        this.form.profile.id = me.id;
        this.form.profile.email = me.email;
        this.form.profile.nickname = me.nickname;
        this.setMyPack(this.me.role);

        // if (this.isPaid) return
        this.selectPack(this.me.role);
      });
    },
    setMyPack (id) {
      this.myPack = {
        ...this.packs.find(x => x.id === id)
      };
    },
    updateProfile () {
      this.$store.dispatch('account/update', this.form.profile);
    },
    selectPack (id) {
      this.form.pack = {
        ..._.cloneDeep(this.packs.find(x => x.id === id))
      };
    },
    pay () {
      this.$refs.upgrade.submit();
    }
  },
  created () {
    this.getProfile();
  }
};
</script>
