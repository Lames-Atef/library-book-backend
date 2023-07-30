import joi from "joi"



export const validateSignup={
    body:joi.object({
            userName:joi.string().required(),
            email:joi.string().email().required(),
            password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            re_Password:joi.string().valid(joi.ref('password')).required()
        }).required()
    }



export const validateLogin={body:joi.object({
    email:joi.string().email().required(),
    password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
}).required()}