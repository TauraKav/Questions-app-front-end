import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useRouter } from "next/router";


const questionPage = () => {
    const [question, setQuestion] = useState();
    const router = useRouter();

    const fetchEvent = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8081/question/${router.query.id}/answers`,
                { userId: "1" }
            );

            const { data } = response;
            setTrip(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        router.query.id &&
            fetchEvent();
    }, [router.query.id]
    )




  return (
    <div>klausimas</div>
  )
}

export default questionPage