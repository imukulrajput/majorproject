const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

main().then(()=>{
    console.log("connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async ()=>{
     await Listing.deleteMany({});
    initdata.data =  initdata.data.map((obj)=>({...obj,owner:'6615265226fb62957e931bc5',}));
     await Listing.insertMany(initdata.data);  
     console.log("data was initialized");
};

initDB(); 