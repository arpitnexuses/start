import express from "express"; 
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'; 
import formRoutes from "./routes/form.js"; 

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); 
app.use(cors()); 


app.use('/',formRoutes);

app.get('/',(req,res) => {
    res.send('Hello Universe!');
})


const PORT = process.env.PORT || 6002; 
mongoose.connect('mongodb+srv://formdata:nexuses@cluster0.sylo9tz.mongodb.net/formdata?retryWrites=true&w=majority').then(()=> app.listen(PORT, ()=> console.log(`Server running on ${PORT}`)))
.catch((error)=> console.log(error.message));

app.use(cors())