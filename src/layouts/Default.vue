<template>
  <div class="wrap">
    <header>
      <slot name="header">
        <app-header></app-header>
      </slot>
    </header>
    <div class="necker"
      v-if="hasSlot('necker')">
      <slot name="necker"></slot>
    </div>
    <div class="bodier"
      v-if="hasSlot('body')">
      <div class="page-title"
        v-if="hasSlot('page-title')">
        <slot name="page-title"> </slot>
      </div>
      <slot name="body"></slot>
    </div>
    <footer class="footer">
      <slot name="footer">
        <app-footer></app-footer>
      </slot>
    </footer>
  </div>
</template>

<script>
/* ============
 * Default Layout
 * ============
 *
 * Used for the home and account pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */

import SlotMixin from '@/mixins/slot';
import appHeader from '@/pages/_part/header';
import appFooter from '@/pages/_part/footer';

export default {
  /**
   * The name of the layout.
   */
  name: 'default-layout',

  mixins: [
    SlotMixin,
  ],
  components: {
    appHeader, appFooter
  },
  data () {
    return {
      menuCollapsed: false,
    };
  },

  /**
   * The methods that the layout can use.
   */
  methods: {
    /**
     * Will log the user out.
     */
    logout () {
      this.$store.dispatch('auth/logout');
    },

    /**
     * Will toggle the menu.
     */
    toggleMenu () {
      this.menuCollapsed = !this.menuCollapsed;
    },
  },
};
</script>
<style lang="scss" scoped>
.page-title {
  text-align: center;
  padding: 6rem 0;
  h1 {
    font-size: 1.8rem;
  }
}
</style>
