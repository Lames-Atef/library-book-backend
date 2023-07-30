import joi from "joi"

export const updatePassword={

    body:joi.object({
       oldPassword:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required,
       newPassword:joi.string().invalid(joi.ref('oldPassword')).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required,
    confirmPassword:joi.string().valid(joi.ref('newPassword')).required
    })
}
