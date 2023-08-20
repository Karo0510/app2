<template>
    <div class="container">
      <CustomizedTable
        :text_parameter="text_parameter"
        :headers="headers"
        :items="accidents"
      >
      <template v-slot:customizedButton="{ item }">
        <CustomizedButton :button_text="'Details'" @click="readID(item.key)"
        />
      </template>
      </CustomizedTable>
    </div>
</template>
  
<script>
import Accidents from '@/services/Accidents';
import CustomizedTable from '../components/CustomizedTable.vue'
import CustomizedButton from '@/components/CustomizedButton.vue'
import AccidentDetails from '@/services/AccidentDetails' 

export default {
  name: 'AccidentsList',
  components: {
    CustomizedTable,
    CustomizedButton
  },
  data() {
    return {
      headers: ["protocole", "date", "department", "place", "numberOfVictims", "accident_priority", "accident"],
      accidents: [],
      text_parameter:  "Accidents list",
    }
  },
  methods: {
    fetchAccidents() {
      return Accidents.getAccidents().then((response) => {
        this.accidents = response.data;
      }).catch((error)=>
      {
        console.log(error);
        this.$router.push({ path: 'Error', query: { message: error.response.data } });
      });
    },
    readID(ID) {
      console.log(ID);
      AccidentDetails.setId(ID);
      this.$router.push({ name: 'AccidentData', params: { data: ID } })
    }
  },
  created() {
    this.fetchAccidents();
  }
}
</script>