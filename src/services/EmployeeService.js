import axios from 'axios'
import store from '@/store.js'

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/employees';
const EMPLOYEE_API_BASE_URL_2 = 'http://localhost:8080/api/add_employees';

class EmployeeService
{
    getEmployees()
    {
      var requestOptions = {
        headers: {
          'Authorization': store.getters.getData
        }
      };

      return axios.get(EMPLOYEE_API_BASE_URL, requestOptions);
    }

    postEmployees(text)
    {
      console.log(text)
      var requestOptions = {
        headers: {
          'Authorization': store.getters.getData
        }
      };

      return axios.post(EMPLOYEE_API_BASE_URL_2, text, requestOptions);
    }
}

export default new EmployeeService()
