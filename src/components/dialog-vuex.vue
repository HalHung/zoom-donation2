<template>
  <el-dialog title="提示"
    :visible.sync="modal">
    <component :is="comp"
      ref="comp"
      v-bind="data"></component>
    <span slot="footer"
      class="dialog-footer">
      <button @click="$emit('update:isShow')">取 消</button>
      <button type="primary"
        @click="submit">確 定</button>
    </span>
  </el-dialog>
</template>
<script>
import { mapGetters } from 'vuex';
export default {

  name: 'vue-dialog',
  data () {
    return {
      isShow_: false
    }
  },
  computed: {

    modal: {
      get () {
        return this.$store.getters['dialog/show']
      },
      set (value) {
        this.$store.dispatch('dialog/open', {
          show: this.$store.getters['dialog/show'],
          comp: this.$store.getters['dialog/comp'],
          data: this.$store.getters['dialog/data'],
          props: this.$store.getters['dialog/props']

        })
      }
    },
    ...mapGetters({
      show: 'dialog/show',
      comp: 'dialog/comp',
      data: 'dialog/data',
      props: 'dialog/props'
    })

  },
  // props: {
  //   comp: {
  //     default () {
  //       return {}
  //     },
  //     type: Object
  //   },
  //   compData: {
  //     default () {
  //       return {}
  //     },
  //     type: Object
  //   },
  //   isShow: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  watch: {
    // isShow: {
    //   immediate: true,
    //   handler (newValue, oldValue) {
    //     if (this.isShow_ === newValue) return
    //     this.isShow_ = newValue
    //   }
    // },
    show: function (val) {
      this.modal = !this.modal
    },
  },
  methods: {

    submit () {
      this.$refs.comp.submit().then(res => {
        // this.$emit('update:isShow', false)
        // this.$emit('update', res)
      })
    }
  }

};
</script>

