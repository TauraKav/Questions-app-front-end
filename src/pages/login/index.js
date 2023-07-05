import React, { useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const LogIn = () => {
    const router = useRouter();
  
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
  
      const login = async () => {
  try {  
        console.log(email);
        console.log(password);
        const response = await axios.post("http://localhost:8081/logIn", {
          email: email,
          password: password,
        });
        console.log(response);
        
        
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("UserId", response.data.id);
  
        router.push("/");
  
  } catch (err) {console.log("err", err)}
  };
  
  
    return (
      <>  
      <div className={styles.form}> 
  <h3>LogIn</h3>
  
      <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
  
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
  
  <button onClick={login} className={styles.button}>
           LogIn
          </button>
        </div>
          </>
    )
  }
  
  export default LogIn