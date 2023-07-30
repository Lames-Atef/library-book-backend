import mongoose from "mongoose";
 const connectDB=async()=>{
    return await mongoose.connect(`mongodb://127.0.0.1/sarahaa`)
    .then(result=>{
        console.log(`database connected ${result}`);
    }).catch(err=>{
        console.log(`database failed ${err}`);
    })
}
export default connectDB
