import bcrypt from "bcryptjs"
export const hash=({plaintext,salt=8}={})=>{
    const hash=bcrypt.hashSync(plaintext,parseInt(salt))
    return hash
}

export const compare=({plaintext,hashValue}={})=>{
    const match=bcrypt.compareSync(plaintext,hashValue)
    return match

}