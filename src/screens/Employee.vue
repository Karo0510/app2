<template>
    <div class="container">
      <CustomizedTable
        :text_parameter="text_parameter"
        :headers="headers"
        :items="employees"
      >
      <template v-slot:customizedButton="{ item }">
        <CustomizedButton :button_text="'Details'" @click="readID(item.id)"
        />
      </template>
      </CustomizedTable>
    </div>
</template>
  
<script>
import EmployeeDetail from '@/services/EmployeeDetail';
import EmployeeService from '../services/EmployeeService';
import CustomizedTable from '../components/CustomizedTable.vue'
import CustomizedButton from '@/components/CustomizedButton.vue'

export default {
  name: 'EmployeesList',
  components: {
    CustomizedTable,
    CustomizedButton
  },
  computed:
    {
        getCredentials() {
            return this.$store.state.credentials;
        }
        
    },
  data() {
    return {
      headers: ["id", "firstName", "lastName", "email", "jobPosition", "nrOfDepartment"],
      employees: [],
      text_parameter: "Employees list"
    }
  },
  methods: {
    getEmployees() {
      EmployeeService.getEmployees().then((response) => {
        this.employees = response.data;
      }).catch((error)=>
      {
        console.log(error);
        this.$router.push({ name: 'login'})
      });
    },
    readID(ID) {
        console.log(ID);
        EmployeeDetail.setId(ID);
        //EmployeeDetail.sendId();
        this.$router.push({ name: 'EmployeeData', params: {id: ID} })
    }
  },
  created() {
    this.getEmployees();
  }
}
</script>