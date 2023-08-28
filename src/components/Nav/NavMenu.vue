<template>
    <div class = "example">
    <div v-for="item in tab" :key="item.id">
        <NavItem
        :title="item.title"
        :items="item.title_items"
        />
    </div>
    <button class="button" style="float: right;" @click="logout()">WYLOGUJ</button>
    <button class="button" style="float: right;" @click="addUsers()">ZAREJESTRUJ</button>
    </div>
</template>

<script>
import NavItem from '../Nav/NavItem.vue';
import axios from 'axios'


export default {
    data() {
        return {
            tab: [
                {
                    ID: 1,
                    title: "PRACOWNICY",
                    title_items: [
                        {
                            id: 1,
                            name: "POKAZ PRACOWNIKOW",
                            path: 'Employees'
                        },
                        {
                            id: 2,
                            name: "DODAJ PRACOWNIKA",
                            path: 'AddEmployee'
                        }
                    ]
                },
                {
                    ID: 2,
                    title: "WYPADKI",
                    title_items: [
                        {
                            id: 1,
                            name: "POKAZ REJESTR WYPADKÓW",
                            path: 'Accidents'
                        },
                        {
                            id: 2,
                            name: "DODAJ WYPADEK",
                            path: 'AddAccident'
                        }
                    ]
                },
                {
                    ID: 3,
                    title: "STANOWISKA",
                    title_items: [
                        {
                            id: 1,
                            name: "SPIS STANOWISK",
                            path: 'JobsList'
                        },
                        {
                            id: 2,
                            name: "DODAJ STANOWISKO PRACY",
                            path: 'JobForm'
                        }
                    ]
                },
                {
                    ID: 4,
                    title: "REJESTR SZKOLEN",
                    title_items: [
                        {
                            id: 1,
                            name: "SPIS SZKOLEN OKRESOWYCH BHP",
                            path: 'Trainings'
                        },
                        {
                            id: 2,
                            name: "DODAJ SZKOLENIA OKRESOWE BHP",
                            path: 'AddTraining'
                        }
                    ]
                }
                
            ]
        };
    },
    components: { NavItem },
    methods:
    {
        async logout()
        {

            var requestOptions = {
                headers: {
                    'Authorization': this.$store.getters.getData
                }
            };

            await axios.post("http://localhost:8080/api/logout", null , requestOptions)
            .then(response => {
                console.log('Odpowiedź od serwera:', response.data);
                sessionStorage.setItem('credentials', null);
                this.$router.push({ name: 'login' })
                })
                .catch(error => {
                // Obsłuż błąd, jeśli wystąpił
                console.error('Błąd podczas wysyłania danych:', error.response.data);
        });
        },
        addUsers()
        {
            
            

            this.$router.push({ name: 'AddUser' })
        }
    }
}

</script>


<style scoped>
.example
{
    background-color: blue;
    width: 100%;
    height: 50px;
}

.button
{
    float:right;
    height: 50px;

}
</style>