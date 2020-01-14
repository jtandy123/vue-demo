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

new Vue({
  render: h => h(App),
}).$mount('#app')
