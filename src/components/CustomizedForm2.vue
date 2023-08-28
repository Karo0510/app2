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
       <div v-if="value[0] === 'IdEmployees'">
        <button @click="toggleList">Add employees</button>
        </div>
        <div v-else-if="value[0] === 'accident_priority'">
          <CustomizedOptionList @select_option="selectPriority"
          :items="priority"
          />
        </div>
        <div v-else-if="value[0] === 'accident'">
          <CustomizedOptionList @select_option="selectIsAccident"
          :items="isAccident"
          />
        </div>
       <div v-else><input :value="value[1]" @input="updateMapValue(value[0], $event.target.value)"></div>
       <p></p>
     </div>
     </div>
     <p></p>
     <div class v-if = "isItemsWindowOpen">
      <CustomizedCheckList @data-updated="closeToggleList" @select_items="selectEmployees"
          :items = obj
          />
      </div>
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
import CustomizedCheckList from './CustomizedCheckList.vue';
import EmployeeService from '../services/EmployeeService';
import CustomizedOptionList from './CustomizedOptionList.vue';


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
    CustomizedTable,
    CustomizedCheckList,
    CustomizedOptionList
},
data() {
 return {
   isWindowOpen: false,
   map: new Map(),
   tab: [],
   isItemsWindowOpen: false,
   obj: [],
   priority: ["LIGHT", "HEAVY", "FATAL", "COLLECTIVE"],
   isAccident: ["TRUE", "FALSE"],
   text: null
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
   toggleList()
   {
      console.log(this.isItemsWindowOpen)
      this.isItemsWindowOpen = !this.isItemsWindowOpen;
   },
   closeToggleList(isClose)
   {
    console.log(isClose)
    this.isItemsWindowOpen = isClose;
    //
   },
   selectEmployees(selected_items)
   {
    console.log("Selected items = "+selected_items)
    this.map.set("IdEmployees", selected_items)
    console.log(this.map.get("IdEmployees"))
   },
   selectPriority(select_priority)
   {
    this.map.set("accident_priority", select_priority)
   },
   selectIsAccident(isAccident)
   {
    this.map.set("accident", isAccident);
   },
      deleteItem(ID)
      {
        this.map.delete(ID);
        this.tab.splice(ID, 1);
      }
},
created() {
 for (let i = 0; i <= this.items.length-1; i++) {
   this.map.set(this.items[i], null);
 }

 EmployeeService.getEmployees().then((response) => {
        this.obj = response.data;
      }).catch((error)=>
      {
        console.log(error);
        this.$router.push({ name: 'login'})
      });

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