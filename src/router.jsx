import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Coachs from "./pages/Coachs";
import Plans from "./pages/Plans";

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
}
])

export default router