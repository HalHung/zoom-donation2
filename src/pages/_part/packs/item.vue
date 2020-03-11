<template>
  <div class="box"
    :class="{'selected':active}">
    <div class="hook">
      <i class="fa fa-check"></i>
    </div>
    <div class="d-flex  justify-content-between flex-wrap">
      <div class="left">
        <h4>{{item.name}}</h4>
        <p v-html="item.desc"
          class="mb-0"> </p>
        <span>{{item.pay_method_info}}</span>
      </div>
      <div class="right text-sm-right"> {{item.priceInfo}} </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: null,
    active: false
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/custom-bootstrap.scss";
@import "./node_modules/bootstrap/scss/mixins/_breakpoints.scss";

.box {
  cursor: pointer;
  position: relative;
  padding: 1rem 3rem;
  width: 100%;
  display: block;

  float: left;
  margin-bottom: 2rem;
  background-color: #fff;
  border: 1px solid $primary;
  &:hover {
    background-color: #ebebeb;
  }

  .left {
    // float: left;
    // margin-right: 200px;
    @include media-breakpoint-down(sm) {
      margin-bottom: 1rem;
      width: 100%;
    }
  }
  .right {
    // float: right;
    font-size: 1.5rem;
    text-align: right;
    // @include media-breakpoint-down(sm) {
    //   float: left;
    // }
  }
  .hook {
    display: none;
    background: $primary;
    position: absolute;
    border-radius: 100%;
    font-size: 2rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    text-align: center;
    line-height: 2.5rem;
    border: 3px solid #fff;
    left: -1.5rem;
    top: 50%;
    margin-top: -1.5rem;
  }
  &.selected {
    color: #fff;
    background-image: linear-gradient(to right, #f26c22 0%, #ffcf00 100%);
    background-repeat: repeat-x;
    .hook {
      display: block;
    }
  }
}
</style>
