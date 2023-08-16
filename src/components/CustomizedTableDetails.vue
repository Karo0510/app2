<template>
    <div class="container">
     <h1 class="text-center">{{ text_parameter }}</h1>
    <table>
    <thead>
      <tr>
        <th>Tytuł</th>
        <th>Dane</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="(value, key) in data" :key="key">
            <td>{{ key }}</td>
            <td>
          <template v-if="Array.isArray(value)">
            <template v-if="key === column_name">
              <LinkedPrintArray
              :items="value"
              :link_name="link_name"
              />
            </template>
            <template v-else>
              <PrintArray :items="value"/>
            </template>
          </template>
          <template v-else>
            {{ value }}
          </template>
        </td>
        </tr>
    </tbody>
  </table>
    </div>
  </template>
  
<script>

import PrintArray from './PrintArray.vue';
import LinkedPrintArray from './LinkedPrintArray.vue';

  export default {
  components: { PrintArray, LinkedPrintArray},
    props: {
    text_parameter: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true
    },
    column_name:{
      type: String, 
      required: false,
    },
    link_name:
    {
      type: String,
      required: false
    },

}   
  
};
</script>

<style scoped>
th,td {
  border: 1px solid black;
  padding: 8px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-center{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>