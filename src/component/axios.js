import axios from 'axios'; 

const instance = axios.create({
   baseURL: "https://from-black.vercel.app/"
}); 
export default instance;
