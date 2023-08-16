import axios from 'axios'
import store from '../store.js'

const JOBS_API_BASE_URL = 'http://localhost:8080/api/jobs';
const JOBS_API_BASE_URL_2 = 'http://localhost:8080/api/risk';

class JobsService{

    getJobs()
    {
        var requestOptions = {
            headers: {
              'Authorization': store.getters.getData
            }
          };

        return axios.get(JOBS_API_BASE_URL, requestOptions);
    }

    postJobs(text)
    {
      var requestOptions = {
        headers: {
          'Authorization': store.getters.getData
        }
      };

      return axios.post(JOBS_API_BASE_URL_2, text, requestOptions);
    }
    
}


export default new JobsService()