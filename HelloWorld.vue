<template>
  <div>Hello {{ msg }}</div>
</template>
<script>
  export default {
    name: 'HelloWorld',

    data() {
      return {
        msg: 'world!'
      }
    }
  }
</script>
