<template>
  <div class="form-group">
    <div class="input-group "> <input type="text"
        class="form-control"
        v-model="form.code"
        placeholder="請輸入優惠碼取得更多優惠方案"
        aria-label="優惠碼"
        aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-primary"
          @click.prevent="submit"
          type="button">送出</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'coupon-input',
  inject: {
    $validator: '$validator'
  },
  components: {},
  data () {
    return {
      isLoading: false,
      form: {
        code: ''
      }
    };
  },
  methods: {
    submit () {
      // this.$validator.validate().then(result => {
      //   if (result) {

      if (!this.form.code) {
        this.$message('請輸入優惠碼');
      } else {
        this.isLoading = true;
        this.$store.dispatch('global/useCoupon', this.form).then(res => {
          this.isLoading = false;
          console.log(res);
        });
      }
      //   }
      // });
    }
  }
};
</script>
