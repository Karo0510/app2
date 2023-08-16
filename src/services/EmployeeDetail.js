import axios from 'axios';
import store from '@/store.js'

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/employees/$id=';

class EmployeeDetails {
  url = '';
  ID = -1;

  setId(number) {
    this.ID = number;
    this.url = EMPLOYEE_API_BASE_URL + this.ID;
  }

  getDataId(){
    return EMPLOYEE_API_BASE_URL + this.ID + "/detail";
  }

  sendId() {
    axios.get(this.url)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  getEmployee()
  {
      console.log(this.getDataId())

      var requestOptions = {
        headers: {
          'Authorization': store.getters.getData
        }
      };

      return axios.get(this.getDataId(), requestOptions);
  }
}

export default new EmployeeDetails();