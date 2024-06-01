import logo from './logo.svg';
import './App.css';
import SignUp from './Component/SignUp';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Component/Login';
import ProtectedRoute from './Component/ProtectedRoute';
import Table from './Component/Table';
function App() {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
     <Route path='/table' element={<ProtectedRoute  children={<Table/>}/>}/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
