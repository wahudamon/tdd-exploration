<template>
  <button>{{ title }}</button>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    title: String,
    subtitle: String
  }
}
</script>
