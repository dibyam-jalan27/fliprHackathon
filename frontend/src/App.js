import './App.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer" ;

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Outlet ,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import OTP from './Pages/OTP';
import Reset from './Pages/Reset';
<<<<<<< HEAD
import { Locationpage } from './Pages/Locationpage';
import About from './Pages/About';
=======
import Location from './Pages/Location';

>>>>>>> 86c102abdb2a30c477d5e16754dfa018da19140e
function App() {
  return (
    <div>
      <Router>
        <Navbar/> 
        <Routes>
         <Route path='/' element ={<Home/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/signup' element ={<SignUp/>}/>
          <Route path='/about' element ={<About/>}/>
          <Route path='/otp' element ={<OTP/>}/>
          <Route path='/password/reset/:token' element ={<Reset/>}/>
<<<<<<< HEAD
          <Route path='/Destination' element={<Locationpage/>}/>
=======
          <Route path='/location' element ={<Location />}/>
>>>>>>> 86c102abdb2a30c477d5e16754dfa018da19140e
        </Routes>
        <Footer />
      </Router>
  </div>
  );
}

export default App;
