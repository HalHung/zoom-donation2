<template>
  <div class="accordion clearfix">
    <div class="accordion-header">
      <div class="title">
        <slot name="title"> </slot>
      </div>
      <button class="btn btn-link"
        @click="isShow = !isShow">
        <i class="fa "
          :class="!isShow ? 'fa-angle-down':'fa-angle-up' "></i>
        <slot name="btn">開關</slot>
      </button>
    </div>
    <div v-if="isShow"
      class="accordion-body clearfix">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
export default {

  name: 'accordion',

  /**
   * The properties that the component accepts.
   */
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    test () {
      this.isShow = !this.isShow
    }
  },
  created () {
    this.$on('toggle', this.test)
  },
  beforeDestroy () {
    this.$off('toggle')
  }

};
</script>
<style lang="scss" scoped>
.accordion-header {
  padding: 1rem 0;
  display: block;
  float: left;
  width: 100%;
  .btn {
    float: right;
    font-weight: bold;
    font-size: 0.8rem;
  }
  .title {
    float: left;
    font-weight: bold;
  }
}
.accordion-body {
  width: 100%;
  display: block;
  float: left;
  padding: 1rem 0;
}
</style>
