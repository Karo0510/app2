import axios from 'axios';
import store from '@/store.js'


class DownloadDataServices
{
    url = '';

    DownloadDataServices(url) {
        this.url = url
    }

    getDataFromURL() {
        var requestOptions = {
          headers: {
            'Authorization': store.getters.getData
          }
        };

        return axios.get(this.url, requestOptions);
    }
}

export default new DownloadDataServices();

