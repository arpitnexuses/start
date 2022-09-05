import axios from 'axios' ;

const instance = axios.create({
   baseURL: "http://localhost:6002"
}); 
export default instance;