<template>
    <div class="container">
      <CustomizedTable
        :text_parameter="text_parameter"
        :headers="headers"
        :items="jobs"
      >
      <template v-slot:customizedButton="{ item }">
        <div class="buttons">
        <CustomizedButton :button_text="'Details'" @click="readID(item.id)"
        />
        <CustomizedButton :button_text="'Update Risk'" @click="createRisk(item.name, item.id)"
        />
        </div>
      </template>
      </CustomizedTable>
    </div>
</template>
  
<script>
import JobsService from '@/services/JobsService';
import CustomizedTable from '../components/CustomizedTable.vue'
import CustomizedButton from '@/components/CustomizedButton.vue'
import RiskAssessmentService from '@/services/RiskAssessmentService';
import MemoryVariable from '@/services/MemoryVariable';
import { eventBus } from '../main';

export default {
  name: 'JobsData',
  components: {
    CustomizedTable,
    CustomizedButton
  },
  data() {
    return {
      headers: ["id", "name", "physicalRisk", "chemicalRisk", "biologicalRisk", "mentalStress"],
      jobs: [],
      text_parameter:  "Jobs list",
    }
  },
  methods: {
    getJobs() {
      JobsService.getJobs().then((response)=>
      {
        this.jobs = response.data;
      })
      .catch((error)=>
      {
        console.log(error);
        this.$router.push({ path: 'Error', query: { message: error.response.data } });
      });
    },
    readID(ID) {
      RiskAssessmentService.setId(ID);
      this.$router.push({ name: 'RiskData', params: {id: ID} })
    },
    createRisk(name, ID)
    {
      console.log(name)
      MemoryVariable.setMemoryVariable(name)
      this.$router.push({ name: 'AddRisk', params: {id: ID} })
      eventBus.$emit('job', name);
      
    }
  },
  created() {
    this.getJobs();
  }
}
</script>

<style>
.buttons 
{
  display: flex;
  justify-content: space-between; /* Dodaje odstęp między elementami */
}
</style>