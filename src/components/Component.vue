<template>
  <div>
    <button-counter></button-counter>
  </div>
</template>
<script>
const buttonCounter = {
  data() {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
};
export default {
  components: {
    'button-counter': buttonCounter
  },
  data() {
    return {}
  }
}
</script>