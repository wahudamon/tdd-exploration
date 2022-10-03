<template>
  <button @click="increment()">Count: {{ count }}</button>
</template>

<script>
export default {
  name: 'IncrementButton',
  props: {
    title: String,
    subtitle: String
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      return this.count++;
    }
  }
}
</script>
