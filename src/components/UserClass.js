import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
    //    console.log(this.props.name+"Child constructor");
   
        this.state={userInfo:{
            name:"dummy",
            location:"default"
        }
        }
         console.log(this.state)
    }
   async componentDidMount(){
    // console.log(this.props.name+"child component did mount")
    const data=await fetch("https://api.github.com/users/akshaymarch7");
    const json=await data.json();
    console.log(json);
    this.setState({userInfo:json})
     console.log("componentdidmount"+this.state.userInfo
     )
     this.state.timer=setInterval(()=>{
        console.log("setTimeout of class")
     },1000);
}
componentDidUpdate(){
    console.log("component did updated");
}
componentWillUnmount(){
    console.log("component will unmount");
    clearTimeout(this.state.timer);
    
}

    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url}/>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:chiru@nov (class)</h4>
        </div>
        );
    }
}
export default UserClass;