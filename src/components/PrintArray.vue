<template>
    <div>
      <div v-for="it in items" :key="it">
        {{ it }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
}
</script>
