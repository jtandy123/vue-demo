<template>
  <div>
    <div :class="isActive ? 'active' : ''"></div>
    <div class="static" :class="{active: isActive, 'text-danger': hassError}"></div>
    <div :class="classObject"></div>
    <div :class="computedClass"></div>
    <div :class="[{ active: isActive}, errorClass]"></div>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    <div :style="styleObject"></div>
    <div :style="[baseStyles, overridingStyles]"></div>
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      classObject: {
        active: true,
        'text-danger': false
      },
      errorClass: 'text-danger',
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      baseStyles: {
        color: 'red',
        fontSize: '13px'
      },
      overridingStyles: {
        color: 'black',
        backgroundColor: 'red'
      }
    };
  },
  computed: {
    computedClass() {
      return {
        active: this.isActive && !this.hasError,
        'text-danger': this.hasError
      };
    }
  }
}
</script>