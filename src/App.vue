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
    <button @click="destroyClock = !destroyClock">{{destroyClock ? '加载时钟' : '销毁时钟'}}</button>
    <clock v-if="!destroyClock" />
    <directives />
    <CustomerDirectives />
    <div>
      <ChildrenA />
    </div>
    <VNodes :vnodes="getJSXSpan()" />
    <anchored-heading1 :level="1">Hello world!</anchored-heading1>
    <anchored-heading2 :level="2">Hello world!</anchored-heading2>
    <anchored-heading3 :level="3">Hello world!</anchored-heading3>
    <VNodes :vnodes="getAnchoredHeading(4)" />
    <list-render></list-render>
    <event-handle></event-handle>
    <Form />
    <Comp></Comp>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import TodoItem from './components/TodoItem.vue';
import Test from './components/Test.vue';
import Todo from './components/Todo.vue';
import Clock from './components/Clock';
import Directives from './components/directives';
import CustomerDirectives from './components/CustomerDirectives';
import AnchoredHeading1 from './components/AnchoredHeading.vue';
import AnchoredHeading2 from './components/AnchoredHeading.js';
import AnchoredHeading3 from './components/AnchoredHeading.jsx';

import ChildrenA from './components/ChildrenA';
import ListRender from './components/ListRender';
import EventHandle from './components/EventHandle';
import Form from './components/Form';
import Comp from './components/Component.vue';

export default {
  name: 'app',
  components: {
    Clock,
    TodoItem,
    TodoList,
    Test,
    Todo,
    Directives,
    CustomerDirectives,
    ChildrenA,
    AnchoredHeading1,
    AnchoredHeading2,
    AnchoredHeading3,
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    },
    ListRender,
    EventHandle,
    Form,
    Comp
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
      }],
      destroyClock: false
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
    },
    getJSXSpan() {
      return <span>Message: {this.message}</span>;
    },
    getAnchoredHeading(level) {
      const Tag = `h${level}`;
      return <Tag>Hello world!</Tag>;
    }
  }
}
</script>

<style>
.border,
.border1,
.border2 {
  border: 1px solid #000;
  padding: 10px 0;
  margin: 10px 10px 0;
}
.border1 {
  border-color: #ccc;
}
.border2 {
  border-color: #eee;
}
</style>