const express =  require('express')
const app = express()

const userModel = require('./Model/userModel')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const secret = 'thisIsSecretKey'
require('dotenv').config();
const db = require('./db')
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('hello from home page')
})

// signup api 
app.post('/', async (req,res)=>{
    let {name,email,password,dateOfBirth} = req.body;
    if(!name || !email || !password || !dateOfBirth){
      return res.send({
        ft:'opps!',
        lt:'info',
        message:'please enter some details'
      })
    }
    const checkUser = await userModel.findOne({email})
    console.log('checkuser',checkUser);
    if(checkUser){
      return res.send({
        ft:'opps',
        lt:'info',
        message:'user already exist'
      })
    }
  let user = await  userModel.create({name:name,email:email,password:password,dateOfBirth:dateOfBirth});
  res.send({
    ft:'congrats',
    lt:'success',
    message:'user created successfully',
    user: user
  })
})

//  login api
app.post('/login',async(req,res)=>{
    const {username,password}= req.body;
    if(!username){
      return res.send({
        ft:'opps!',
        lt:'info',
        message:'please enter username'
      })
    }
    if(!password){
      return res.send({
        ft:'opps!',
      lt:'info',
    message:'please enter password'
   })
    }
    const checkUser = await userModel.findOne({email:username})
    if(!checkUser){
      return res.send({
        ft:'opps!',
        lt:'error',
        message:'user does not exist'
      })
    }
    if(password!=checkUser.password){
      return res.send({
        ft:'opps!',
        lt:'error',
        message:'invalid password'
      })
    }
    const userData = {
      name:checkUser.name,
      username:checkUser.email,
      dateOfBirth:checkUser.dateOfBirth
    }
    const token = jwt.sign(userData,secret,{expiresIn:'7d'})
    res.send({
      ft:'congrats',
      lt:'success',
      message:'logged in successfully',
      token:token
    })
})
//  get all users api 
app.get('/table',async(req,res)=>{
  const table  = await userModel.find()
  res.send({
    table:table
  })
})


app.listen(4000,()=>{
    console.log('server is started on port 4000');
})