<template>
    <div class="container">
      <CustomizedTable
        :text_parameter="text_parameter"
        :headers="headers"
        :items="trainings"
      >
      <template v-slot:customizedButton="{ item }">
        <CustomizedButton :button_text="'Details'" @click="readID(item.id)"
        />
      </template>
      </CustomizedTable>
    </div>
</template>
  
<script>
import Training from '@/services/Training';
import TrainingDetails from '@/services/TrainingDetail';
import CustomizedTable from '../components/CustomizedTable.vue'
import CustomizedButton from '@/components/CustomizedButton.vue'

export default {
  name: 'TrainingList',
  components: {
    CustomizedTable,
    CustomizedButton
  },
  data() {
    return {
      headers: ["id", "firstTrainingDate", "examTrainingDate"],
      trainings: [],
      text_parameter:  "Training list",
    }
  },
  methods: {
    fetchTraining() {
      return Training.getTrainings().then((response) => {
        console.log(response.data)
        this.trainings = response.data;
      }).catch((error)=>
      {
        console.log(error);
        this.$router.push({ path: 'Error', query: { message: error.response.data } });
      });
    },
    readID(ID) {
      console.log(ID);
      TrainingDetails.setId(ID);
      this.$router.push({ name: 'TrainingsData', params: { data: ID } })
    }
  },
  created() {
    this.fetchTraining();
  }
}
</script>