import axios from 'axios'
import config from './config'

axios.defaults.baseURL = config.publicUrl + 'api' 
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// Check for Token
axios.interceptors.request.use(req => {
    if (localStorage.getItem('access_token') != null) {
        req.headers.authorization = 'Bearer ' + localStorage.getItem('access_token')
    }
    return req;
});

export default axios