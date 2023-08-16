<template>
    <div class="container">
      <p></p>
      <CustomizedForm2
        :text_parameter="text_parameter"
        :items="headers"
        :title="title"
        :choose_column="column"
        @data-emitted="sendData"
      />
      <CustomizedInfo v-if="errorVisible" :text = "errorInfo" @close_pop="closePop"/>
      </div>
</template>
  
<script>
import CustomizedForm2 from '../components/CustomizedForm2.vue'
import CustomizedInfo from '../components/CustomizedInfo.vue'
import MemoryVariable from '@/services/MemoryVariable';
import Accidents from '@/services/Accidents.js';

export default {
  name: 'AccidentsForm',
  data() {
    return {
      headers: [  "protocole", "department", "place", "date", "numberOfVictims",	"accident_priority", "accident", "IdEmployees"],
      text_parameter:  "Add Accident",
      title: "Accident Form",
      column: "IdEmployees",
      errorInfo: "",
      errorVisible: false
    }
  },
  methods:
  {
    sendData(text)
    {
      console.log(text)

      Accidents.postAccidents(text).then((response) => 
      {
        console.log('Odpowiedź od serwera:', response.data);
      }).catch((error)=>
      {
        console.error('Błąd podczas wysyłania danych:', error.response.data);
        this.errorInfo = error.response.data
        this.errorVisible = true;
        console.log(error);
        //this.$router.push({ name: 'AddAccident'})
      });
      console.log(text)
    },
    closePop(isClose)
    {
      this.errorVisible = isClose;
    }
  },
  beforeMount()
  {
    this.job = MemoryVariable.getMemoryVariable();
    this.flag = true;
  },
  components: {
    CustomizedForm2,
    CustomizedInfo
  }, 
}
</script>

<style scoped>

.data_form
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


</style>