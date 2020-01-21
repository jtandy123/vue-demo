<template>
  <div>
    <button-counter></button-counter>
    <div :style="{fontSize: postFontSize + 'em'}">
      <blog-post
        v-for="post of posts" 
        v-bind:key="post.id" 
        v-bind:post="post"
        v-on:enlarge-text="postFontSize += $event"
      ></blog-post>
    </div>
    <custom-input v-model="searchText"></custom-input>
    <span>search text: {{ searchText }}</span>
    <alert-box>
      Something bad happened.
    </alert-box>
    <div>
      <button v-for="tab of tabs" :key="tab" @click="currentTab = tab">{{tab}}</button>
      <component :is="currentTabComponent"></component>
    </div>
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
const blogPost = {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button @click="$emit('enlarge-text', 0.1)">Enlarge text</button>
      <div v-html="post.content"></div>
    </div>
  `
};
const customInput = {
  props: ['value'],
  template:`
    <input :value="value" @input="$emit('input', $event.target.value)" >
  `
};
const alertBox = {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
};
const tabHome = {
  template: '<div>Home component</div>'
};
const tabPosts = {
  template: '<div>Posts component</div>'
};
const tabArchive = {
  template: '<div>Archive component</div>'
};
export default {
  components: {
    'button-counter': buttonCounter,
    'blog-post': blogPost,
    'custom-input': customInput,
    alertBox,
    tabHome,
    tabPosts,
    tabArchive
  },
  data() {
    return {
      posts: [{
        id: 1,
        title: 'My journey with Vue',
        content: 'xxxxxx'
      }, {
        id: 2,
        title: 'Blogging with Vue'
      }, {
        id: 3,
        title: 'Why Vue is so fun'
      }],
      postFontSize: 1,
      searchText: '',
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']
    }
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab;
    }
  },
  methods: {
    onEnlargeText(enlargeAmount) {
      this.postFontSize += enlargeAmount;
    }
  }
}
</script>