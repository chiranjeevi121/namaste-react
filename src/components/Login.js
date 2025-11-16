import { useState } from "react";
import {Link,useNavigate} from "react-router-dom"
import {Formik,Field,Form,ErrorMessage} from "formik";
import * as yup from "yup";
 const Login=()=>{
//     const [username,setusername]=useState("");
//     const [password,setPassword]=useState("");
     const navi=useNavigate();
//     const hadleSubmit=(e)=>{
//         e.preventDefault();
//         if(username.trim() === "" || password.trim() === ""){
//             alert("please enter the input data");
//             return;
//         }
//         if(username==="admin" && password==="1234"){   
//             navi("/");
//         }
//         else{
//             alert("Invalid credentials");
//             return;
//         }
   
//     }
//     return(
//         <div className="Form-data">
//     <form onSubmit={hadleSubmit}>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="user-name" name="user-name" required value={username} onChange={(e)=>setusername(e.target.value)} />   <br/>
//          <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" required value={password}  onChange={(e)=>setPassword(e.target.value)}/>  <br/>
//         <div className="btn-sub">
//         <button type="submit">Submit</button>
//         <Link to="/resForm">New User</Link>
//         </div>
//     </form>
//     </div>
//     );
// }
//  const validationSchema =yup.object({
//     email: yup.string().email("Invalide email").required("required"),
//     password: yup.string().min(6,"minium six characters").required("Required"),
//    })
// const Login=()=>{
//     const navig=useNavigate();
  
// const formik=useFormik({
//     initialValues:{email:"",password:""},
//     validationSchema ,
//     onSubmit:(values)=>{
//         console.log("form",values);
//         if(values.email==="admin" && values.password==="1234"){
//             alert("Login Successful");
//             navig("/")
//         }
//     }

// });
return(
    <div>
    {/* <form onSubmit={formik.handleSubmit}>
        <div>
    <label>Email:</label>
    <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange}/>
    {formik.errors.email&&formik.touched.email&&<p>{formik.errors.email}</p>}
    </div>
    <div>
    <label>Passowrd:</label> 
    <input type="password" value={formik.values.password} onChange={formik.handleChange} name="password"/>
     {formik.errors.password&&formik.touched.password&&<p>{formik.errors.password}</p>}
    </div>
    <button type="submit"> Login</button>
    </form> */}
    <Formik
    initialValues={{email:"",password:"",}} 
    validationSchema={yup.object({
        email:yup.string().email("Invalid email").required("Required"),
        password:yup.string().min(6,"Minimum six charaters").required("Required")
    })} 
    onSubmit={ (values)=>{
    console.log("values",values);
    navi("/")
    }}>

        <Form>
            <div>
                <label>Email</label>
                <Field type="email"  name="email"/>
                <ErrorMessage name="email" content="div"/>
            </div>
        <div>
            <label>Password</label>
            <Field type="password" name="password"/>
            <ErrorMessage name="password" component="div"/>
        </div>
        <div>
            <label>Gender:</label>
            <label><Field type="radio" value="male" name="gender"/>Male</label>
            <label><Field type="radio" value="female" name="gemder"/>Female</label>         
        </div>
        <div>
            <label>Hobbies:</label>
            <label><Field type="checkbox" value="reading" name="hobbies"/>Reading</label>
            <label><Field type="checkbox" value="movies" name="hobbies"/>Watching Movies</label>
        </div>
        <div>
            <label>Country:</label>
            <select>
                <option value="">Select a country</option>
                <option value="india">India</option>
                <option value="japan">Japan</option>
            </select>
        </div>
        <button type="submit">Login</button>
        </Form>
        </Formik>
    </div>
    )
}
export default Login;