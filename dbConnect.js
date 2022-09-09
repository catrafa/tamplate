import mongoose from "mongoose";

const {
    MONGODB_URL
} = process.env;
async function dbConnect() {
    try{await mongoose.connect(MONGODB_URL);}
catch (error){
console.error('could not connect to mongodb', error.message);
}
}

export default dbConnect; 