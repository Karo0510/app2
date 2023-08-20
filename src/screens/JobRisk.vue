<template>
    <div class="container">
      <CustomizedTable
        :text_parameter="text_parameter"
        :headers="headers"
        :items="hazard_factors"
      >
      <template v-slot:customizedButton="{ item }">
        <CustomizedButton :button_text="'UPDATE RECORD'" @click="readID(item.id)"
        />
      </template>
      </CustomizedTable>
      <div class="info">last update: {{ last_update_date }}</div>
    </div>
</template>
  
<script>
import RiskService from '@/services/RiskAssessmentService';
import CustomizedTable from '../components/CustomizedTable.vue'
import CustomizedButton from '@/components/CustomizedButton.vue'

export default {
  name: 'RiskData',
  components: {
    CustomizedTable,
    CustomizedButton
  },
  data() {
    return {
      headers: ["hazard", "causeOfHazard", "probability", "rank", "risk", "actions", "probabilityAfterPreventiveActions", "rankAfterPreventiveActions", "riskAfterPreventiveActions"],
      hazard_factors: [],
      text_parameter:  "Risk Assessment",
      last_update_date: null
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
  },
  created() {
    this.getRisks();
  }
}
</script>






