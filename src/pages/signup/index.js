import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from 'next/router';
import Navbar from "../../components/navbar/Navbar";


const SignUp = () => {
  const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSuccess, setSuccess] = useState(false);


    const createUser = async () => {
        const response = await axios.post("http://localhost:8081/signUp", {
          name: name,
          email: email,
          password: password,
        });

if (response.status === 200) {
  setSuccess(true);

  setTimeout(() => {
    router.push("/login");
  }, 2000);
}
};

  return (
    <>
    <Navbar/>
      <h1 className={styles.title}>User registration</h1>

      <div className={styles.form}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />

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

        <button onClick= {createUser} className={styles.button}>
          Create user account
        </button>

        {isSuccess && <div>User was created successfully</div>}
      </div>
    </>
  );
};

export default SignUp 