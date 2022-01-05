import React, {useState} from "react";


function Register(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[lname,setlname]=useState("");

    
    return(
        
        <div  >
            <h1>Hello world</h1>
     <h1 style={{fontStyle: "Bernard MT Condensed",color: "White",letterSpacing:"1px",paddingLeft:"400px",fontSize:"40px"}}>Welcome to the Register page.  </h1>
        <div  className="login" >

            <form className="login_form" >
                <h1 className="text">Register Here     
                <div className="img">    
               <img  src={'Images/login.png'} alt="Login" style={{maxWidth:270,maxHeight:270,paddingLeft:"15.0rem",}}/> </div>
               </h1> 
                <input type="name" placeholder="Name"value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="lname" placeholder="lname" value={lname} onChange={(e)=>setlname(e.target.value)}/>
             <button className="submit_btn">Submit</button>

             
            </form>
        </div>
        </div>
        

    );
};
export default Register;