<template>
    <div class="container">
    <CustomizedTableDetails
        :text_parameter="text_parameter"
        :data="training"
        :column_name="column_name"
        :link_name="link_name"
    />
    </div>
</template>
  
  
<script>
import TrainingDetails from '../services/TrainingDetail';
import CustomizedTableDetails from '@/components/CustomizedTableDetails.vue';


export default
{
        // eslint-disable-next-line vue/multi-word-component-names
    name: 'TrainingData',
    components: {
        CustomizedTableDetails,
    },
    props: ['data'],
    data(){
        return{
            text_parameter: "Training's Data",
            training: {},
            column_name: "IdEmployees",
            link_name: '/employees/$id='
        }
    },
    created()
    {
        this.getTraining(this.data)
    },
    methods:
    {
        getTraining(data) {
            TrainingDetails.setId(data);
            TrainingDetails.getAcc().then((response)=>
            {
                console.log(response);
                this.training = response.data;
            }).catch((error)=>
            {
                console.log(error);
                this.$router.push({ path: 'Error', query: { message: error.response.data } });
            });
        }
    }
   
    }
  </script>
