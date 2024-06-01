import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
import axios from 'axios';
import Swal from 'sweetalert2';
import '../Stylesheet/signUp.css'
function SignUp() {
  const [name,setName] = useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword] = useState('')
  const [dateOfBirth,setDateOfBirth] = useState('')
 
      async function signUpHandler(e){
    e.preventDefault()
    const data = {name:name,email:email,password:password,dateOfBirth:dateOfBirth}
            await axios.post('http://localhost:4000/',data)
           .then((result)=>{
            console.log(result,'usereeeee');
            Swal.fire(`${result.data.ft}`,`${result.data.message}`,`${result.data.lt}`)
           }).catch((error)=>{
            console.log('error while creating user');
           })
     } 
    
  return (
    <div className='signUp-main'>
        <div className="sign-up-container">
           <form onSubmit={signUpHandler}>
            <div className="signUp-uper">
              <button className='login-btn2' onClick={()=>window.location.href = '/'}>LOGIN</button>
              <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" alt="" />
            </div>
           <div className="signUp-lower">
           <div className='input-container'>
                 <i class="ri-user-fill"> | </i>
                <input type="text" onc onChange={(e)=>setName(e.target.value)}   name='name' placeholder=' Name'/>
            </div>
            <div className='input-container'>
                <i class="ri-calendar-fill"> | </i>
                <input type="date" onChange={(e)=>setDateOfBirth(e.target.value)}   name='dateOfBirth'  placeholder=' Date of Birth'/>
            </div>
            <div className='input-container'>
                <i class="ri-mail-fill"> | </i>
                 <input type="text" onChange={(e)=>setEmail(e.target.value)}   name='email' placeholder='Email' />
            </div>
            <div className='input-container'>
                <i class="ri-lock-fill"> | </i>
                <input type="text" onChange={(e)=>setPassword(e.target.value)}   name='password' placeholder='Password' />
            </div>
            <button type='submit' className='signUp-btn'>Sign up</button>
           </div>
           </form>
        </div>

    </div>
  )
}

export default SignUp