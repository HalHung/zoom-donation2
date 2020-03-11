<template>
  <el-dialog title="提示"
    @closed="reset"
    :visible.sync="isShow_">
    <component :is="comp"
      ref="comp"
      v-bind="compData"></component>
    <span slot="footer"
      class="dialog-footer">
      <button @click="$emit('update:isShow')">取 消</button>
      <button type="primary"
        @click="submit">確 定</button>
    </span>
  </el-dialog>
</template>
<script>
// import { mapGetters } from 'vuex';
export default {

  name: 'vue-dialog',
  data () {
    return {
      isShow_: false
    }
  },
  props: {
    comp: {
      default () {
        return {}
      },
      type: Object
    },
    compData: {
      default () {
        return {}
      },
      type: Object
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isShow: {
      immediate: true,
      handler (newValue, oldValue) {
        if (this.isShow_ === newValue) return
        this.isShow_ = newValue
      }
    },
    isShow_: function (val) {
      this.$emit('update:isShow', val)
    },
  },
  methods: {
    submit () {
      this.$refs.comp.submit().then(res => {
        this.$emit('update:isShow', false)
        // this.$emit('update', res)
      })
    }
  }

};
</script>

