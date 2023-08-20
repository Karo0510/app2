import axios from 'axios';
import store from '@/store.js';

const Training_API_BASE_URL = 'http://localhost:8080/api/training_register';

class TrainingService {

  getTrainings() {

    var requestOptions = {
      headers: {
        'Authorization': store.getters.getData
      }
    };

    return axios.get(Training_API_BASE_URL, requestOptions);
  }

  postTrainings(text) {

    var requestOptions = {
      headers: {
        'Authorization': store.getters.getData
      }
    };

    return axios.post(Training_API_BASE_URL, text, requestOptions);
  }
}

export default new TrainingService();