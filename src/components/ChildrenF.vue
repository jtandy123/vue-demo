<template>
  <div class="border2">
    <h3 :style="{ color: theme1.color }">F 结点</h3>
    <button @click="getARef">获取A Ref</button>
    <button @click="getHRef">获取H Ref</button>
  </div>
</template>
<script>
export default {
  components: {},
  inject: {
    theme1: {
      from: "theme",
      default: () => ({})
    },
    getParentRef: {
      from: "getRef",
      default: () => {}
    },
    getParentChildrenRef: {
      from: "getChildrenRef",
      default: () => {}
    }
  },
  methods: {
    getARef() {
      // eslint-disable-next-line
      console.log(this.getParentRef());
    },
    getHRef() {
      // eslint-disable-next-line
      console.log(this.getParentChildrenRef("childrenH"));
    }
  }
};
</script>