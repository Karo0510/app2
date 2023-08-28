<template>
     <div class="container">
      <div v-if = isWindowOpen class="model">
      <div class = "form">
      <div class = "element">
      <h3>{{text_parameter}}</h3>
      </div>
        <div v-for="(value, key) in mapToArray" :key="key">
          <div class = "element">
          <h5>{{ value[0] }}</h5>
          <input :value="value[1]" @input="updateMapValue(value[0], $event.target.value)">
          <p></p>
        </div>
        </div>
        <p></p>
        <div class = "element">
        <CustomizedButton :button_text="'ADD DATA'" @click="printJSON" />
        <p></p>
        <CustomizedButton :button_text="'CANCEL'" @click="stateWindow" />
        </div>
        </div>
        </div>
        <CustomizedTable
        :text_parameter="title"
        :headers="items"
        :items="tab">
      
        <template v-slot:customizedButton="{ item }">
        <CustomizedButton :button_text="'DELETE'" @click="deleteItem(item.index)"/>
        </template>
      
        </CustomizedTable>
        
        <div class="element">
        <CustomizedButton :button_text="'ADD ROW'" @click="stateWindow" />
        <p></p>
        <CustomizedButton :button_text="'SEND DATA'" @click="sendData" />
        </div>
    </div>
</template>
  
<script>
import CustomizedButton from '@/components/CustomizedButton.vue'
import CustomizedTable from '../components/CustomizedTable.vue'


  export default {
    props: {
    text_parameter: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false
    }
    
},
components: {
    CustomizedButton,
    CustomizedTable
},
data() {
    return {
      isWindowOpen: false,
      map: new Map(),
      tab: []
    }
  },
  methods: 
  {
      printJSON()
      {
        var obj = Object.fromEntries(this.map);

        this.tab.push(obj)

        this.stateWindow()
      },
      updateMapValue(key, newValue) 
      {
        this.map.set(key, newValue);
      },
      stateWindow() {
        this.isWindowOpen = !this.isWindowOpen;
      },
      sendData() 
      {
          console.log(this.tab)
          this.$emit('data-emitted', this.tab);
          this.tab = []
      },
      deleteItem(ID)
      {
        console.log(ID)
        this.map.delete(ID);
        this.tab.splice(ID, 1);
      }
  },
  created() {
    for (let i = 0; i <= this.items.length-1; i++) {
      this.map.set(this.items[i], null);
    }
  },
  computed: {
    mapToArray() {
      console.log(Array.from(this.map))
      return Array.from(this.map);
    },
  }
  
};
</script>

<style scoped>

.form{
  background-color: blue;
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


.element{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>