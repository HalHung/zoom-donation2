<template>
  <div class="banner">
    <div class="bg"
      :style="{'background-image' : 'url(' + pic + ')'}"></div>
  </div>
</template>
<script>

export default {
  props: ['img'],
  computed: {
    pic: function () {
      return require(`@/assets/img/${this.img}`)
    }
  }
};
</script>
<style lang="stylus" >
.banner {
  display: block;
  position: relative;
  height: 300px;
  overflow: hidden;
}
</style>
