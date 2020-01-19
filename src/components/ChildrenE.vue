<template>
  <div class="border2">
    <h3 :style="{ color: theme.color }" v-ant-ref="c => setChildrenRef('childrenE', c)">E 结点</h3>
    <button @click="handleClick">改变color为green</button>
  </div>
</template>
<script>
export default {
  components: {},
  inject: {
    theme: {
      default: () => ({})
    },
    setChildrenRef: {
      default: () => {}
    }
  },
  methods: {
    handleClick() {
      if (this.theme.changeColor) {
        this.theme.changeColor("green");
      }
    }
  }
};
</script>