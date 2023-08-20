<template>
    <div class="container">
      <h1 v-if = "this.flag">{{this.createTitle()}}</h1>
      <div class = "data_form">
        <h4>Wpisz datę aktualizacji</h4>
        <input type = "text" v-model="update_date">
      </div>
      <p></p>
      <div v-if = "this.flag">
      <CustomizedForm
        :text_parameter="text_parameter"
        :items="headers"
        @data-emitted="sendData"
      >
      </CustomizedForm>
      <CustomizedInfo v-if="errorVisible" :text = "errorInfo" @close_pop="closePop"/>
      </div>
    </div>
</template>
  
<script>
import JobsService from '@/services/JobsService'
import CustomizedForm from '../components/CustomizedForm.vue'
import MemoryVariable from '@/services/MemoryVariable';
import CustomizedInfo from '../components/CustomizedInfo.vue'
import { format } from 'date-fns'
import axios from 'axios';
import store from '@/store.js'

export default {
  name: 'RiskForm',
  data() {
    return {
      headers: [  "hazard", "causeOfHazard", "probability",	"rank",	"risk",	"actions",	"probabilityAfterPreventiveActions","rankAfterPreventiveActions","riskAfterPreventiveActions"],
      text_parameter:  "Add Risk Assessment",
      job: "ala ma kota",
      update_date: format(new Date(), "yyyy-MM-dd"),
      nrOfDepartment: 9,
      title: "Risk Assessment for ",
      flag: false,
      myObj: null,
      errorInfo: "",
      errorVisible: false
    }
  },
  methods:
  {
    sendData(data)
    {
      console.log(data)

      this.myObj = {
          "jobName": this.job,
          "lastRisk": this.update_date,
          "nrOfDepartment": this.nrOfDepartment,
          "factors": data
      }

      JobsService.postJobs(this.myObj).then((response) => 
      {
        console.log('Odpowiedź od serwera:', response.data);
      }).catch((error)=>
      {
        console.error('Błąd podczas wysyłania danych:', error);
        this.errorInfo = error.response.data
        this.errorVisible = true;
        //console.log(error);
        //this.$router.push({ name: 'login'})
      });
      console.log(data)
    },
    createTitle()
    {
      return 'Risk Assessment For ' + this.job;
    },
    receiveData(title)
    {
      console.log("ABCD");
      console.log(title);
      self.job = title; 
      console.log(self.job)

      return self.job
    },
    closePop(isClose)
    {
      this.errorVisible = isClose;
    }
  },
  beforeCreate() {
    var requestOptions = {
      headers: {
        'Authorization': store.getters.getData
      }
    };

    axios.get("http://localhost:8080/api/login", requestOptions)
    .then(response=>console.log(response))
    .catch((error)=>{ 
      console.log(error.response.data),  
        this.$router.push({ name: 'login'})
      }
   
    )
  },
  beforeMount()
  {
    this.job = MemoryVariable.getMemoryVariable();
    this.flag = true;
  },
  components: {
    CustomizedForm,
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