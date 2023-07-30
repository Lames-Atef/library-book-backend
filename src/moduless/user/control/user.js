import userModel from "../../../../DB/model/usermodel.js"
import { asyncHandler } from "../../../utiles/globalhandling.js"

import { compare, hash } from '../../../utiles/hashAndcompare.js'

export const getUserModule = (req, res, next) => {
    return res.json({ message: "User module" })
}

export const profileUser =asyncHandler (async (req, res, next) => {

    const user = await userModel.findById(req.user._id)
    return res.status(200).json({ message: "Done", user })
})


export const sharedProfileData = asyncHandler(async (req, res, next) => {
    const user = await userModel.findById(req.params.id).select('userName email profilePic')
    return user ? res.status(200).json({ message: "Done", user }) :
        next(new Error('In-valid account Id', { cause: 404 }))
})

export const updatePassword = asyncHandler(async (req, res, next) => {
    const { _id } = req.user;
    const { oldPassword, newPassword } = req.body;
    const user = await userModel.findById(_id)
    if (!compare({ plaintext: oldPassword, hashValue: user.password })) {
        return next(new Error("In-valid old Password", { cause: 400 }))
    }
    const hashPassword = hash({ plaintext: newPassword })
    user.password = hashPassword;
    await user.save();
    return res.status(200).json({ message: "Done" })
})
