<template>
  <div>
    <div>{{msg}}</div>
    <div>{{msg.split('').reverse().join('')}}</div>
    <div v-once>static message: {{msg}}</div>
    <button @click="onMessageChange">change message</button>
    <p>Using mustaches: {{rawHtml}}</p>
    <p>
      Using v-html directive:
      <span v-html="rawHtml"></span>
    </p>

    <div v-bind:id="dynamicId">{{dynamicId}}</div>
    <button v-bind:[attributeName]="isButtonDisabled">disabled</button>

    <div v-if="Math.random() > 0.5">Now you see me</div>
    <div v-else>Now you don't</div>

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <br/>
    <button @click="toggleLoginType">Toggle login type</button>

    <div v-for="(value, name, index) in object" :key="index">
      {{index}}. {{name}}: {{value}}
    </div>

    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{index}} - {{item.message}}
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in evenNumbers" :key="index">
        {{item}}
      </li>
    </ul>
     <button @click.alt.exact="onCtrlClick">A</button>
  </div>
</template>

<script>
export default {
  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    }
  },
  data() {
    return {
      attributeName: 'disabled',
      dynamicId: new Date().getTime(),
      isButtonDisabled: true,
      items: [{
        message: 'Foo'
      }, {
        message: 'Bar'
      }],
      loginType: 'username',
      msg: 'This is a message.',
      numbers: [1, 2, 3, 4, 5, 6],
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2020-01-08'
      },
      rawHtml: '<span style="color:red" :title="msg">This should be red.</span>'
    };
  },
  methods: {
    onCtrlClick() {
      // eslint-disable-next-line no-console
      console.log('alt is pressed');
    },
    onMessageChange() {
      this.msg = 'This is a new message. ' + new Date().getTime();
    },
    toggleLoginType() {
      this.loginType = this.loginType === 'username' ? 'email' : 'username';
    }
  }
}
</script>