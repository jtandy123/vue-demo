<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ message.split('').reverse().join('') }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello world',
      firstName: 'Foo',
      lastName: 'Bar',
      // fullName: 'Foo Bar'
    };
  },
  computed: {
    reverseMessage() {
      return this.message.split('').reverse().join('')
    },
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName;
      },
      set(newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  watch: {
    firstName(val) {
      this.fullName = val + ' ' + this.lastName;
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val;
    }
  }
}
</script>