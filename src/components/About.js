import User from "./User";
import UserClass  from "./UserClass";
import { Component } from "react";
class About extends Component{
constructor(props){
    super(props);
    // console.log("parent Constructor");
}
componentDidMount(){
    // console.log("parent component did mount")
}
render(){
    // console.log("parent Render");
    return(
      <div>      
        <h1>This is Namastev React Web eries</h1>
        <h2>Thought by super Cool Akshay saini</h2>
        {/* <UserClass name={"First"}  location="srikalahsti"/> */}
        <User />
        </div>
    );

}
}
export default About;