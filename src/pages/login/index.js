import React, { useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar/Navbar";

const LogIn = () => {
    const router = useRouter();
  
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
  
      const login = async () => {
  try {   
        const response = await axios.post("http://localhost:8081/logIn", {
          email: email,
          password: password,
        });
  
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("UserId", response.data.id);
  
        router.push("/");
  
  } catch (err) {console.log("err", err)}
  };
  
  
    return (
      <>  
      <Navbar />
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