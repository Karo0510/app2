<template>
    <div>
      <div v-for="it in items" :key="it">
        <router-link :to="createLink(it)">
            {{ it }}
        </router-link>
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
      link_name:{
        type: String,
        required: false
      }
    },
    methods:
    {
        createLink(value)
        {
          return this.link_name+value;
        }
    },
 
}
  </script>
