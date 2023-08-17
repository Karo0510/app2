<template>
    <div class = "example">
    <div v-for="item in tab" :key="item.id">
        <NavItem
        :title="item.title"
        :items="item.title_items"
        />
    </div>
    </div>
</template>

<script>
import NavItem from '../Nav/NavItem.vue';


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
                            path: 'Accident'
                        },
                        {
                            id: 2,
                            name: "DODAJ WYPADEK",
                            path: 'AddAccident'
                        }
                    ]
                }
            ]
        };
    },
    components: { NavItem }
};

</script>


<style scoped>
.example
{
    background-color: blue;
    width: 100%;
    height: 100px;

}
</style>