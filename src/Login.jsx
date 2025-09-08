import React, { useState } from "react";
import "./Login.css";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const[emailId , setEmailId]  = useState("")
   const[password , setPassword]  = useState("")
    const[confirmPassword , setConfirmPassword]  = useState("")
 
     const navigate = useNavigate();
                        
         

           const handleAuth = async () => {
                    try {
             if (isLogin) {
    
             const res = await axios.post(
        "http://localhost:7777/api/login",
               { emailId, password },
                { withCredentials: true }
              );
              console.log("Login success:", res.data);
                  
                navigate("/");
               } else {
    

                 const res = await axios.post(
                 "http://localhost:7777/api/signup",
                { emailId, password },
                { withCredentials: true }
                  );
                   console.log("Signup success:", res.data);
                alert("Signup successfully!");
                    }
                } catch (err) {
               console.error("Auth error:", err.response?.data || err.message);
               alert("Something went wrong!");
            }
             };
                     
          
            




  return (
    <div className="front-page">
      <div className="navbar">
        <h2>QuickGpt</h2>
      </div>

      <div className="register">
        <h1 className="heading">{isLogin ? "Log in" : "Sign up"}</h1>
        <p>
          {isLogin
            ? "Welcome back! Please log in."
            : "Create an account to get smarter responses."}
        </p>

         <input
            type="email"
            placeholder="Email Id"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            id="input"
          />
       <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="input"
          />

        {!isLogin && (
          <input
            type="text"
            placeholder="confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="input"
          />
        )}

        <button className="log-btn  "onClick={handleAuth}>{isLogin ? "Log in" : "Sign Up"}</button>
         

        <p>
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setIsLogin(true)}
              >
                Log in
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}


export default Login;
