const axios = require('axios').default;

const instance = axios.create({
   baseURL: "http://localhost:6002"
}); 
export default instance;