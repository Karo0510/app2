import axios from 'axios'
import store from '@/store.js'

const RISK_API_BASE_URL = 'http://localhost:8080/api/risk/$job_id=';

class RiskService
{
    url = '';
    ID = -1;

    setId(number) {
        this.ID = number;
        this.url = RISK_API_BASE_URL + this.ID;
    }

    getDataId(){
        return RISK_API_BASE_URL + this.ID;
    }

    getHazardFactors()
    {
        var requestOptions = {
            headers: {
              'Authorization': store.getters.getData
            }
          };


        return axios.get(this.getDataId(), requestOptions);
    }


}


export default new RiskService()