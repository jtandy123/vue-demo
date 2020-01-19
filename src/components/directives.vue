<template>
  <div>
    <h2>v-text</h2>
    <div v-text="'hello vue'">hello world</div>
    <h2>v-html</h2>
    <div v-html="'<span style=&quot;color: red&quot;>hello vue</span>'">
      hello world
    </div>
    <span v-pre>{{ this will not be compiled }}</span>
  </div>
</template>