<template>
  <div class="menu">
    <div class="button" @mouseenter="showList" @mouseleave="hideList">{{ title }}</div>
      <div v-if="isOpenList" ><ListElement :items="items" @mouseleave="hideList"/></div>
  </div>
</template>

<script>

import ListElement from '../Nav/ListElement.vue';

export default {
  data() {
    return {
      isOpenList: false,
      ans: false
    }
  },
  components:
  {
      ListElement
  },
  props: {
      items: {
        type: Array,
        required: true,
      },
      title:{
        type: String,
        required: false
      }
  },
  methods:
  {
    showList()
    {
      this.isOpenList = true
    },
    hideList(event) {
      console.log(event)
      const targetElement = event.relatedTarget || event.toElement;
      if (!targetElement || !targetElement.classList.contains('my-list')) {
        this.isOpenList = false;
      }
    }
    },
  }


</script>

<style scoped>

.menu
{
  position: relative;
  float: left;
}

.button
{
  background-color: blue;
  border: 1px solid #000; 
  display: flex;
  width: 300px;
  padding: 10px;
}

.button:hover
{
  background-color: red;
  display: block;
}

.menu_list
{
  display: block;
  z-index: 1;
}

</style>
