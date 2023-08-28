import axios from 'axios';
import store from '@/store.js';

const Register_API_BASE_URL = 'http://localhost:8080/api/save';

class RegisterService {

  getData() {

    var requestOptions = {
      headers: {
        'Authorization': store.getters.getData
      }
    };

    return axios.get(Register_API_BASE_URL, requestOptions);
  }

  postData(text) {

    var requestOptions = {
      headers: {
        'Authorization': store.getters.getData
      }
    };

    return axios.post(Register_API_BASE_URL, text, requestOptions);
  }
}

export default new RegisterService();