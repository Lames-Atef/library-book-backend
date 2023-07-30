
const dataMethod=["body","params","query","headers"]




const validationSchema=(schema)=>{
return(req,res,next)=>{
    validationErr=[]
    dataMethod.forEach(key => {
        if(schema[key]){
            const validation=schema[key].validate(req[key],{abortEarly:false})
    if(validation.error){
   validationErr.push(validation.error.details)
    }
        }  
    })

    if(validationErr.length>0){
        return res.json({message:"validation error",validation})
    }
    return next()

}
}
export default validationSchema
