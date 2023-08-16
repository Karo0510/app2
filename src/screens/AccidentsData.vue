<template>
    <div class="container">
    <CustomizedTableDetails
        :text_parameter="text_parameter"
        :data="accident"
        :column_name="column_name"
        :link_name="link_name"
    />
    </div>
</template>
  
  
<script>
import AccidentDetails from '@/services/AccidentDetails';
import CustomizedTableDetails from '@/components/CustomizedTableDetails.vue';


export default
{
        // eslint-disable-next-line vue/multi-word-component-names
    name: 'AccidentData',
    components: {
        CustomizedTableDetails,
    },
    props: ['data'],
    data(){
        return{
            text_parameter: "Accident's Data",
            accident: {},
            column_name: "IdEmployees",
            link_name: '/employees/$id='
        }
    },
    created()
    {
        this.getAccident(this.data);
    },
    methods:
    {
        getAccident(data) {
            AccidentDetails.setId(data);
            AccidentDetails.getAcc().then((response)=>
            {
                console.log(response);
                this.accident = response.data;
            }).catch((error)=>
            {
                console.log(error);
                this.$router.push({ name: 'login'})
            });
        }
    }
   
    }
  </script>
