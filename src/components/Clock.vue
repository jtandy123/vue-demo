<template>
  <div>
    {{ log('render') }}
    {{ now }}
    <button @click="start = !start">{{ start ? '停止' : '开始' }}</button>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    // eslint-disable-next-line
    console.log('data');
    this.moment = moment;
    this.log = window.console.log;
    return {
      now: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      start: false
    };
  },
  watch: {
    start() {
      this.startClock();
    }
  },
  beforeCreate() {
    // eslint-disable-next-line
    console.log('beforeCreate');
  },
  created() {
    // eslint-disable-next-line
    console.log('created');
  },
  beforeMount() {
    // eslint-disable-next-line
    console.log('beforeMount');
  },
  mounted() {
    // eslint-disable-next-line
    console.log('mounted');
  },
  beforeUpdate() {
    // eslint-disable-next-line
    console.log('beforeUpdate');
  },
  updated() {
    // eslint-disable-next-line
    console.log('updated');
  },
  beforeDestroy() {
    // eslint-disable-next-line
    console.log('beforeDestroy');
    clearInterval(this.clockInterval);
  },
  destroyed() {
    // eslint-disable-next-line
    console.log('destroyed');
  },
  methods: {
    startClock() {
      clearInterval(this.clockInterval);
      if (this.start) {
        this.clockInterval = setInterval(() => {
          this.now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        }, 1000);
      }
    }
  }
}
</script>