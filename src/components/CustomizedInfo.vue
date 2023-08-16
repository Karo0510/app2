<template>
    <div class="full_screen_component">
        {{ text }}
        <div></div>
        <CustomizedButton :button_text="'CLOSE'" @click="closeWindow"
        />
    </div>
</template>



<script>
import CustomizedButton from './CustomizedButton.vue';
export default {
  components: { CustomizedButton },
 props: {
  text: {
   type: String,
   required: true
  },
 },
 methods: {
    closeWindow() {
      this.$emit('close_pop', false)
    }
  }
};
</script>


<style scoped>

.full_screen_component {
  background-color: gray;
  display: grid; 
  place-items: center; 
  min-height: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity:0.6
}

</style>

