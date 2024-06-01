import React from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function ProtectedRoute({children}) {
   const user = JSON.parse(localStorage.getItem('user'))
   if(!user){
    return window.location.href = '/'
   }
  return (
    <div>
       {children} 

    </div>
  )
}

export default ProtectedRoute