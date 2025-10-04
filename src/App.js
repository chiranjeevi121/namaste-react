// const heading=    React.createElement("h1",{id:"heading",xyz:"123"},"Hellow World From React");
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";





const AppLayout=()=>{
    return (
      <div className="applayoutcontainer">
   <Header/>
   <Body/>
</div>
    );
}
   
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout/>);
