<template>
    <div class="container">
        <p>USERNAME</p>
        <input type="email" v-model="person.email" />
        <p></p>
        <p>PASSWORD</p>
        <p></p>
        <input type="password" v-model="person.password" />
        <p></p>
        <CustomizedButton :button_text="'Log in'" @click="sendData()" />
        <CustomizedInfo v-if="errorVisible" :text = "errorInfo" @close_pop="closePop"/>
    </div>
</template>
  

<script>
import CustomizedButton from '@/components/CustomizedButton.vue'
import CustomizedInfo from '@/components/CustomizedInfo.vue'
import axios from 'axios'

export default
{
    name: 'LogPage',
    components: {
        CustomizedButton,
        CustomizedInfo
    },
    computed:
    {
        getCredentials() {
            return this.$store.state.credentials;
        }
        
    },
    data()
    {
        return{
          
            person:
            {
                email: "",
                password: ""
            },
             
            link: 'http://localhost:8080/api/home',
            errorInfo: "",
            errorVisible: false
        }
    },
    methods: 
    {
        createJSON()
        {
            var text = JSON.stringify(this.person);
            console.log(text)
            return JSON.stringify(this.person);
        },
        async sendData()
        {
            this.$store.commit('updateData', `Basic ${btoa(`${this.person.email}:${this.person.password}`)}`);

            var text = this.createJSON();
    
            console.log(text)
            await axios.post(this.link, text, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    'Authorization': this.$store.getters.getData
                }
            })
            .then(response => {
          // Obsłuż odpowiedź od serwera, jeśli jest wymagane
                console.log('Odpowiedź od serwera:', response.data);
                sessionStorage.setItem('credentials', JSON.stringify(this.$store.getters.getData));
                this.$router.push({ name: 'Employees' })
                })
                .catch(error => {
                // Obsłuż błąd, jeśli wystąpił
                console.error('Błąd podczas wysyłania danych:', error.response.data);
                this.errorInfo = error.response.data
                this.errorVisible = true;
        });
        },
        closePop(isClose)
        {
            this.errorVisible = isClose;
        }
    
    }
   
}
   
</script>