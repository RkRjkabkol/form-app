import React, {useState} from "react";
import {Link} from "react-router-dom";
function Login(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    

    
    return(
        
        <div  style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80")` 
          }}>
     <h1 style={{fontStyle: "Bernard MT Condensed",color: "White",letterSpacing:"1px",paddingLeft:"400px",fontSize:"40px"}}>Welcome to the Food Court.  </h1>
        <div  className="login" >

            <form className="login_form" >
                <h1 className="text">Login Here     
                <div className="img">    
               <img  src={'Images/login.png'} alt="Login" style={{maxWidth:270,maxHeight:270,paddingLeft:"15.0rem",}}/> </div>
               </h1> 
                <input type="name" placeholder="Name"value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
             <button className="submit_btn">Submit</button>
             
             <Link to='register'>
                 
                    Register
                  </Link>
                
            </form>
        </div>
        </div>
        

    );
};
export default Login;