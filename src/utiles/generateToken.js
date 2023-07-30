import jwt from "jsonwebtoken"
export const generateToken=({payload={},signature="alaaissleeping",expireIn=60*60}={})=>{
    const token=jwt.sign(payload,signature,{expireIn:parseInt(expireIn)})
    return token
}
export const verifyToken=({token,signature}={})=>{
const verify=jwt.verify(token,signature)
return verify
}
