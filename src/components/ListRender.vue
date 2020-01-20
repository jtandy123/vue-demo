<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="item.message">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
      <li v-for="(value, name, index) in object" :key="value">
        {{ index }} - {{ name }} - {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentMessage: 'Parent',
      items: [{
        message: 'Foo'
      }, {
        message: 'Bar'
      }],
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane',
        publishedAt: '2019-01-20'
      }
    };
  }
}
</script>