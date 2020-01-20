import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('todo-item2', {
  template: `
  <li>
    {{title}}
    <button @click="$emit('remove')">Remove</button>
  </li>
  `,
  props: ['title']
});

Vue.component('button-counter', {
  data() {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
