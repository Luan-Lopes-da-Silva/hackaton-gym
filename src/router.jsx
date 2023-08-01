import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Coachs from "./pages/Coachs";
import Plans from "./pages/Plans";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import Student from "./pages/StudentD/Student";

const router = createBrowserRouter([
{
path:'/',
element:<RootLayout/>,
children:[{
index:true,
element:<Home/>  
},{
path:'/about',
element:<About/>  
},{
path:'/services',
element:<Services/>  
},{
path:'/coachs',
element:<Coachs/>  
},{
path:'/plans',
element:<Plans/>  
}]  
},{
path:'/login',
element:<Login/> 
},{
path:'/signin',
element:<Signin/>  
},{
path:'/student',
element:<Student/>  
}
])

export default router