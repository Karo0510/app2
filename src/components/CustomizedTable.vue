<template>
  <div class="container">
    <h1 class="text-center">{{ text_parameter }}</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="header in headers" :key="header">{{ item[header] }}</td>
          <td>
            <slot name="customizedButton" :item="item"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    text_parameter: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: false,
    },
    headers: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style scoped>
th,td {
  border: 1px solid black;
  padding: 8px;
}
</style>