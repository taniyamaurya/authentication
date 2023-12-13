import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
       
    const handleSubmit = async () => {
        
        try {
            const response = await fetch("http://localhost:4500/getData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
    
            const data = await response.json();
            console.log("data", data);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    




  return (
    <div>
       
        <input type='email' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login