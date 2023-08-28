<template>
    <div class="container">
      <div class = "form" v-if="isOpenUpdateRecord">
        <UpdateRecord
        :items = "choose_item"
        />
      </div>
      <CustomizedTable
        :text_parameter="text_parameter"
        :headers="headers"
        :items="hazard_factors"
      >
     <!--- <template v-slot:customizedButton="{ item }">
      <CustomizedButton :button_text="'UPDATE RECORD'" @click="readID(item)" />
      </template>-->
      </CustomizedTable>
      <div class="info">last update: {{ last_update_date }}</div>
    </div>
</template>
  
<script>
import RiskService from '@/services/RiskAssessmentService';
import CustomizedTable from '../components/CustomizedTable.vue'
import UpdateRecord from '@/forms/UpdateRecord.vue';

export default {
  name: 'RiskData',
  components: {
    CustomizedTable,
    UpdateRecord
},
  data() {
    return {
      headers: ["hazard", "causeOfHazard", "probability", "rank", "risk", "actions", "probabilityAfterPreventiveActions", "rankAfterPreventiveActions", "riskAfterPreventiveActions"],
      hazard_factors: [],
      text_parameter:  "Risk Assessment",
      last_update_date: null,
      isOpenUpdateRecord: false,
      choose_item: null
    }
  },
  methods: {
    getRisks() {
      RiskService.getHazardFactors().then((response)=>
      {
        var temp = response.data
        this.hazard_factors = temp.hf;
        this.last_update_date = temp.ra.date
      }).catch((error)=>
      {
        console.log(error);
        this.$router.push({ path: 'Error', query: { message: error.response.data } });
      });
    },
    readID(ID)
    {
      this.choose_item = ID;
      this.isOpenUpdateRecord = !this.isOpenUpdateRecord;
    }
  },
  created() {
    this.getRisks();
  }
}
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
</style>


