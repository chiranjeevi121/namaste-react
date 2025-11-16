// const heading=    React.createElement("h1",{id:"heading",xyz:"123"},"Hellow World From React");
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Login from "./components/Login"
import RestaurantInfo from "./components/RestaurantInfo";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ResgForm from "./components/ResgForm";
const AppLayout=()=>{
    return (
      <div className="applayoutcontainer">
   <Header/>
   <Outlet/>
</div>
    );
}
 const appRouter=createBrowserRouter([{
    path:"/",
    element:<AppLayout />,
    children:[
       {
    path:"/",
    element:<Body/>    
 },
      {
    path:"/about",
    element:<About/>    
 },
 {
    path:"/contactus",
    element:<ContactUs />    
 },
 {
    path:"/restaurants/:id",
    element:<RestaurantInfo />    
 },
 {
   path:"/login",
   element:<Login/>
 },{
   path:"resform",
   element:<ResgForm/>
 }
    ],
    errorElement:<Error/>
 },
 
])  
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
