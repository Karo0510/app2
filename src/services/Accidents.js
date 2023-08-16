import axios from 'axios';
import store from '@/store.js';

const Accidents_API_BASE_URL = 'http://localhost:8080/api/register_of_accidents';

class AccidentsService {

  getAccidents() {

    var requestOptions = {
      headers: {
        'Authorization': store.getters.getData
      }
    };

    return axios.get(Accidents_API_BASE_URL, requestOptions);
  }

  postAccidents(text) {

    var requestOptions = {
      headers: {
        'Authorization': store.getters.getData
      }
    };

    return axios.post(Accidents_API_BASE_URL, text, requestOptions);
  }
}

export default new AccidentsService();