const express =require('express')
require('./db/mongoose')

const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')
const app =express()

const port=process.env.PORT 

// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//        res.send('get request are disabled')
//     }else{
//         next()
//     }

// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site undr maintanence check back soon')
// })
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
const jwt= require('jsonwebtoken')

// const myfunction= async()=>{
//     const token=jwt.sign({_id:'abc_123'},'thisismynewjwt',{expiresIn:'7 days'})
//     console.log(token)
//     const data=jwt.verify(token,'thisismynewjwt')
//     console.log(data)
// }
// const bcrypt =require('bcryptjs')

// const myfunction= async ()=>{
//     const password='ASAD123@'
//     const hashedpassword=await bcrypt.hash(password,8)
//     console.log(password)
//     console.log(hashedpassword)

//     const isMatch=await bcrypt.compare('ASAD123@',hashedpassword)
//     console.log(isMatch)
// }

// myfunction()




// app.post('/upload',upload.single('upload'),(req,res)=>{
// res.send()
// })

app.listen(port,()=>{
    console.log('Server is  up on port '+port)
})