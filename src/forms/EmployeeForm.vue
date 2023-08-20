<template>
    <div class="container">
      <CustomizedForm
        :text_parameter="text_parameter"
        :items="headers"
        :title="title"
        @data-emitted="sendData"
      >
      </CustomizedForm>
      <CustomizedInfo v-if="errorVisible" :text = "errorInfo" @close_pop="closePop"/>
    </div>
</template>
  
<script>
import EmployeeService from '@/services/EmployeeService'
import CustomizedForm from '../components/CustomizedForm.vue'
import CustomizedInfo from '../components/CustomizedInfo.vue'
import axios from 'axios';
import store from '@/store.js'

export default {
  name: 'EmployeesForm',
  components: {
    CustomizedForm,
    CustomizedInfo
  },
  data() {
    return {
      headers: ["firstName", "lastName", "email", "jobPosition", "nrOfDepartment", "date", "lastTrainingDate"],
      text_parameter:  "Add Employee",
      title: 'Employee form',
      errorInfo: "",
      errorVisible: false
    }
  },
  methods:
  {
    sendData(data)
    {
      console.log(data)

      EmployeeService.postEmployees(data).then((response) => 
      {
        console.log('Odpowiedź od serwera:', response.data);
      }).catch((error)=>
      {
        console.error('Błąd podczas wysyłania danych:', error);
        this.errorInfo = error.response.data
        this.errorVisible = true;
      });
      console.log(data)
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
}
</script>