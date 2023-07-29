import logo from './logo.svg';
import './App.css';
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet ,
  Route,
  Link,
} from "react-router-dom";
import OTP from './Pages/OTP';
import Reset from './Pages/Reset';

const Layout = () => {
  return(<div className="app">
    <Navbar />
    <Outlet />
    <hr/>
    <Footer />
  </div>
    
  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element :<Layout />,
    children : [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/signup",
        element:<SignUp />
      },{
        path: "/otp",
        element : <OTP />
      },{
        path :"/reset",
        element: <Reset />
      }
    ]
  }
])
function App() {
  return (
    <div>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
