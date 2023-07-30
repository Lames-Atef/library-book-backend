import authRouter from './moduless/auth/auth.router.js';
import userRouter from './moduless/user/user.router.js'

import connectDB from '../DB/connection.js';
import  globalErrHandling from './utiles/globalhandling.js';




const initApp = (app, express) => {

    app.use(express.json({}))

    app.get('/', (req, res) => res.send('Hello World!'))

    app.use('/auth', authRouter)
    app.use('/user', userRouter)
    

    app.use("*" , (req,res)=>{
        return res.json({message:"404 Page Not Found"})
    })
app.use(globalErrHandling)
  
    connectDB()

}


export default initApp