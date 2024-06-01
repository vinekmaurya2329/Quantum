import React, { useState } from 'react'
import  '../Stylesheet/login.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function Login() {

const [username,setUsername]= useState('')
const [password,setPassword] = useState('')

 async function handleLogin(){
  const data = {username:username,password:password}
 await axios.post('http://localhost:4000/login',data)
 .then((result)=>{
  localStorage.setItem('user',JSON.stringify(result))
     Swal.fire(`${result.data.ft}`,`${result.data.message}`,`${result.data.lt}`);
     if(result.data.message =='logged in successfully'){
      setTimeout(()=>{
        window.location.href = '/table'
      },1500)
     }
 }).catch((error)=>{
  console.log('error while login');
 })

}
  return (
    <div>
 <div className="login-container">
 
 <div className='login-box'>
 <div className="uper">
 <div>
  <button className='signUp' onClick={()=>window.location.href = '/signup'}>SIGN UP</button>
  </div>
 <div className='avatar'>
  <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" alt="" />
  </div>
 </div>
<div className="lower">
<div className='username-div'>
 <i class="ri-user-fill">|</i>
  <input type="text" placeholder=' username' onChange={(e)=>setUsername(e.target.value)} />
  </div>
 <div className='username-div'>
 <i class="ri-lock-fill">|</i>
  <input type="text" placeholder=' password' onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div>
    <a href="">Forget your password</a>
       
  </div>
  <button className='login-btn' onClick={handleLogin}>LOGIN</button>
</div>
 </div>

 </div>


    </div>
  )
}

export default Login