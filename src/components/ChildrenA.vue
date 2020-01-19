<template>
  <div class="border">
    <h1>node A</h1>
    <button @click="() => changeColor()">change color</button>
    <button @click="getEH3Ref">获取E h3 Ref</button>
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
  </div>
</template>

<script>
import ChildrenB from './ChildrenB';
import ChildrenC from './ChildrenC';
import ChildrenD from './ChildrenD';

export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  // provide() {
  //   return {
  //     theme: {
  //       color: this.color
  //     }
  //   };
  // },
  provide() {
    return {
      theme: this,
      setChildrenRef: (name, ref) => {
        this[name] = ref;
      },
      getChildrenRef: name => {
        return this[name];
      },
      getRef: () => {
        return this;
      }
    }
  },
  data() {
    return {
      color: 'blue'
    }
  },
  methods: {
    changeColor(color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === 'blue' ? 'red' : 'blue';
      }
    },
    getEH3Ref() {
      // eslint-disable-next-line
      console.log(this.ChildrenE);
    }
  }
}
</script>