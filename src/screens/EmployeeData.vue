<template>
    <div class="container">
    <CustomizedTableDetails
        :text_parameter="text_parameter"
        :data="employee"
        :column_name = "column_name"
        :link_name = "link_name"
    />
    </div>
</template>
  
<script>
import EmployeeDetail from '@/services/EmployeeDetail';
import CustomizedTableDetails from '@/components/CustomizedTableDetails.vue';

export default
{
    name: 'EmployeeData',
    props: ['id'],
    components: {
        CustomizedTableDetails,
    },
    data(){
        return{
            text_parameter: "Employee's Data",
            employee: {},
            column_name: 'numberOfProtocole',
            link_name: '/accidents/$data='
        }
    },
    created()
    {
        this.getEmployee(this.id);
    },
    methods:
    {
        getEmployee(id) 
        {
        EmployeeDetail.setId(id);
        EmployeeDetail.getEmployee().then((response) => 
        {
            this.employee = response.data;
        }).catch((error)=>
            {
                console.log(error);
                this.$router.push({ path: 'Error', query: { message: error.response.data } });
            });
        }
        },
    }
  
  </script>

  