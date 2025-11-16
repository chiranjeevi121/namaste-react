import {useNavigate} from "react-router-dom";
import {useState} from "react"
const ResgForm=()=>{
    const [username,setusername]=useState("");
    const [passowrd,setpassword]=useState("");
    const [confpassword,setconfpassword]=useState("");
    const  nav=useNavigate();
    const hadleSubmit=(e)=>{
        e.preventDefault();
        if(username.trim()==""||passowrd.trim()==""||confpassword.trim()==""){
            alert("please enter the input data");
            return;
        }
        if(passowrd!=confpassword){
            alert("password and confirm password should be same ");
            return;
        }
        else{
            nav("/");
        }
    }

    return(
        <div className="res-form">
            <form onSubmit={hadleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="user-name" name="user-name" required value={username} onChange={(e)=>setusername(e.target.value)} />   <br/>
            <label htmlFor="passowrd">Passowrd:</label>
            <input type="password" id="password" name="passowrd" required value={passowrd} onChange={(e)=>setpassword(e.target.value)} /> <br/>
            <label htmlFor="confpassword">Confirm Passowrd:</label>
            <input type="password" id="confpassword" name="confpassword" required value={confpassword} onChange={(e)=>setconfpassword(e.target.value)} /> <br/>
            <button type="submit"> Submit</button>
            </form>
        </div>
    )
}
export default ResgForm;