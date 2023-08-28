<template>
    <div>
    <CustomizedForm
        :text_parameter="text_parameter"
        :items="headers"
        :title="title"
        @data-emitted="sendData"
    />
    <CustomizedInfo v-if="errorVisible" :text = "errorInfo" @close_pop="closePop"/>
    </div>
</template>


<script>
import CustomizedForm from '../components/CustomizedForm.vue'
import CustomizedInfo from '../components/CustomizedInfo.vue'
import RegisterService from '../services/Register.js'

export default{
name: 'RegisterForm',
  components: {
    CustomizedForm,
    CustomizedInfo
},
  data() {
    return {
      headers: ["username", "email", "password", "role"],
      text_parameter:  "Add User",
      title: 'User form',
      errorInfo: "",
      errorVisible: false,
    }},
    methods:{
        sendData(text)
        {
            RegisterService.postData(text).then((response) => 
            {
                console.log('Odpowiedź od serwera:', response.data);
                this.errorInfo = response.data
                this.errorVisible = true;

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
    }
}

 
</script>
