<template>
  <div>
    <item v-for="(item,k) in list"
      :key="k"
      :item="item"
      :active="selected === item.id"
      @click.native="select(item.id)"></item>
  </div>
</template>
<script>
import item from './item';
export default {
  components: {
    item
  },
  props: {
    list: null,
    selected: null
  },

  methods: {
    select (id) {
      this.$emit('update:selected', id);
    }
  }
};
</script>
