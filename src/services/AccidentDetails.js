import axios from 'axios';
import store from '@/store.js'


const Accidents_API_BASE_URL = 'http://localhost:8080/api/register_of_accidents/$data=';

class AccidentDetails
{
    url = '';
    data = "";

    setId(data) {
        this.data = data;
        this.url = Accidents_API_BASE_URL + this.data;
    }

    getDataId(){
        return Accidents_API_BASE_URL + this.data;
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

    getAcc()
    {
        var requestOptions = {
          headers: {
            'Authorization': store.getters.getData
          }
        };



        console.log(axios.get(this.getDataId()),requestOptions);
        return axios.get(this.getDataId(), requestOptions);
    }
}

export default new AccidentDetails();

