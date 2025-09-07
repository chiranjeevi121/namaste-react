// const heading=    React.createElement("h1",{id:"heading",xyz:"123"},"Hellow World From React");
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const heading =React.createElement("h1",{id:"headfing"},"this is namstedev");
console.log(heading);
//jsx=> React.creatElement=>react element js-object=>render as html 
// const Jsxheading=()=> <h1 id="jsxheading" className='root' tabIndex="1">This is jsxheading</h1>;
// console.log(Jsxheading);
//component =>functional component and class based component

// const number=1000;
// const Heading=()=>
//    <div className="container">
//     <Jsxheading/>
//     <Title/>
//     <h1>This is a rect function component</h1>
//   </div>

  
   // console.log(Title);
const divContainer=React.createElement("div",{class:"container"},[React.createElement("h1",null,"this isa h1 tag"),React.createElement("h2",null,"this is a h2 tag"),React.createElement("h3",null,"this is a h3 tag")])
const divConJsx=<div className="Title">
   <h1>this is a h1 tag content </h1>
   <h2>this is a h2 tag content </h2>
   <h3>this is a h3 tag content </h3>
</div>

const DivConFuncJax=()=>(
   <div className="Title">
      {Title()}
   <h1 style={{color:'red'}}>this is a h1 tag content </h1>
   <h2 style={{ textAlign: 'center' }}>this is a h2 tag content </h2>
   <h3>this is a h3 tag content </h3>
</div>
);
const Title=()=><h1>This is a title</h1>
   //header functional component
const Header=()=>(
      <div className="container">
      <img src="https://www.logodesign.net/logo/abstract-geometric-shape-with-letter-n-3624ld.png" alt="logo"/>
      <input type="text" placeholder="search" />
     <img src="/profileUser.png"  alt="profile" />
      </div>
   )

   
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(< Header/>);
