import axios from 'axios'; 

const instance = axios.create({
   baseURL: "https://form-pi-blue.vercel.app/"
}); 
export default instance;
