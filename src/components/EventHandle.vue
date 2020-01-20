<template>
  <div>
    <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
    <div @click.capture="warn('outer')">
      <div>outer</div>
      <div @click.stop="warn('middle')">
        <div>middle</div>
        <div @click="warn('inner')">inner</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    warn(message, event) {
      if (event) {
        event.preventDefault();
      }
      alert(message);
    }
  }
}
</script>