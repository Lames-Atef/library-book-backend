import userModel from "../../../../DB/model/usermodel.js";
import  {sendEmail}  from "../../../services/sendemail.js";


import { compare, hash } from "../../../utiles/hashAndcompare.js";
import { generateToken } from "../../../utiles/generateToken.js";
import { asyncHandler } from "../../../utiles/globalhandling.js";

export const signUp= asyncHandler(
    async(req,res,next)=>{
        const protocol=req.protocol
        const host=req.headers.host
        console.log(protocol);
        console.log(host);
        const url=`${protocol}://${host}/auth/verifyEmail/${token}`
        console.log(url);
        const{userName,email,password,phone}=req.body
        console.log({userName,email,password,phone});
        const checkUser=await userModel.findOne({email})
        if(checkUser){
            return next(new Error("email exist"))
        }
        const hashPassword=hash({plaintext:password})
        const user=await userModel.create({userName,email,password:hashPassword,phone})
        const token=generateToken({payload:{email},signature:process.env.SIGNATURE})
    sendEmail(email,'confirm email',`<a href="${url}">please click here to confirm email</a>`)
        return res.json({message:"done",user})
    }
)


export const logIn=asyncHandler(
    async(req,res,next)=>{
        const {email,password}=req.body
        console.log({email,password})
        const checkUser=await userModel.findOne({email})
        if(!checkUser){
            return next(new Error("not found"))
        }else{
            console.log(user.confirmEmail);
            if(user.confirmEmail){
                const match=compare({
                    plaintext:password,
                    hashValue:user.password
                })
                if(!match){
                    return next(new Error("password in valid"))
                }
                const token=generateToken({
                    payload:{id:user._id,role:user.role},
                    expireIn:60*60
                })
                console.log({token});
                user.status="online"
                await user.save()
                return res.json({message:"done",token})
            }
        }
        
    }
)
export const verifyMail=async (req,res,next)=>{
    const {token}=req.params
    const decoded=jwt.verify(token,process.env.SIGNATURE)
    console.log(decoded)
    const user=await userModel.findByIdAndUpdate({email:decoded.id},{confirmEmail:true})
    return user ?res.json({message:"done"}):res.json({message:"email not found to confirm "})
}

export const forgetPassword=async(req,res,next)=>{
    const{email}=req.body
    const code=uuidv4()
    sendEmail(email,"forget password",`<h1>code:${code}</h1>`)
    const user=await userModel.findOneAndUpdate({email},{code})
    return user ?res.json({message:"please enter mail"}):res.json({message:"email not found  "})

}

  