<template>
  <div id="app">
    <input v-model="message">
    <input :value="message" @input="handleInputChange">
    {{message}}
    <div :id="message"></div>
    <button @click="addList">add list</button>
    <todo-list>
      <todo-item :key="index" @delete="handleDelete" v-for="(item, index) in list" data-test="test" :title="item.title" :del="item.del">
        <!-- <span slot="pre-icon">前置图标</span>
        <span slot="suf-icon">后置图标</span> -->
        <template v-slot:pre-icon="{value}">
          <span>前置图标 {{value}}</span>
        </template>
        <!-- <template v-slot:suf-icon>
          <span>后置图标</span>
        </template> -->
      </todo-item>
    </todo-list>
    <test></test>
    <todo></todo>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import TodoItem from './components/TodoItem.vue';
import Test from './components/Test.vue';
import Todo from './components/Todo.vue';

export default {
  name: 'app',
  components: {
    TodoItem,
    TodoList,
    Test,
    Todo
  },
  data() {
    return {
      message: 'hello word',
      list: [{
        title: '课程1',
        del: false
      }, {
        title: '课程2',
        del: true
      }]
    };
  },
  methods: {
    addList() {
      this.list.unshift({
        title: '课程0',
        del: false
      });
    },
    handleDelete(val) {
      // eslint-disable-next-line no-console
      console.log('handleDelete', val);
    },
    handleInputChange(e) {
      this.message = e.target.value;
    }
  }
}
</script>
