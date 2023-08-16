<template>
     <div>
    <select id="opcje" v-model="selectedOption" @change="selectChoice()">
      <option v-for="item in items" :value="item" :key="item ">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
 props: {
  items: {
   type: Array,
   required: true
  },
 },
 data() {
    return {
      selectedOption: ''
    };
  },
  methods:
  {
    selectChoice()
    {
      this.$emit('select_option', this.selectedOption)
    },
  }
};
</script>
