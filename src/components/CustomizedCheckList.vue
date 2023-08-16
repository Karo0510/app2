<template>
<div class="full_screen_component">
  <h1 class="list">Employee's list</h1>
    <li class = "list" v-for="item in items" :key="item.id">
        <label>
            <input type="checkbox" v-model="selected_items" :value="item.id">
            {{ item.firstName + " " + item.lastName + " nr. " + item.nrOfDepartment }}
        </label>
      </li>
      <CustomizedButton :button_text="'OK'" @click="closeWindow" />
</div>
</template>
  
<script>
import CustomizedButton from './CustomizedButton.vue';
  
export default {
    props: {
        items: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            isWindowOpen: true,
            selected_items: []
        };
    },
    methods: {
        closeWindow() {
            console.log(this.selected_items);
            this.isWindowOpen = !this.isWindowOpen;
            this.$emit('data-updated', this.isWindowOpen);
            this.$emit('select_items', this.selected_items);
        },
    },
    components: { CustomizedButton }
}
     
</script>
  
<style scoped>
  
.full_screen_component {
  background-color: blue;
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>