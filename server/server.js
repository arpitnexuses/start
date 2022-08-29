const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// connection to mongoose server
 mongoose.connect("mongodb+srv://formdata:nexuses@cluster0.sylo9tz.mongodb.net/formdata?retryWrites=true&w=majority")
// require roots
app.use("/", require("./routes/formRoute"))
app.listen(3013, function(){
    console.log("express server listening on port 3013");
})