import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Coachs from "./pages/Coachs";
import Plans from "./pages/Plans";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import Student from "./pages/Student/Student";
import Fisio from "./pages/Fisio/Fisio";
import Impedance from "./pages/Impedance/Impedance";
import Personal from "./pages/Personal/Personal";
import Agendate from "./pages/Agendate/Agendate";
import PersonalInfos from "./pages/Coachs/PersonalInfos";
import NutriInfos from "./pages/Coachs/NutriInfos";
import Physio from "./pages/Coachs/Physio";

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
},{
path:'/agendate',
element:<Agendate/>    
},{
path:'/personalinfos',
element:<PersonalInfos/> 
},{
path:'/nutriinfos',
element:<NutriInfos/>  
},{
path:'/physioinfos',
element:<Physio/>  
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
},{
path:'/fisio',
element:<Fisio/>  
},{
path:'/impedance',
element:<Impedance/>,  
},{
path:'/personal',
element:<Personal/>  
}
])

export default router