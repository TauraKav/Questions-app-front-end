import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./QuestionCard.module.css";
import Link from "next/link";
import trash from "../../assets/trash.png";
import axios from "axios";

const QuestionCard = ({ title, id, text }) => {
    const [isSuccess, setSuccess] = useState(false);
    const router = useRouter();

    const deleteQuestion = async () => {
        try {
            const response = await axios.delete(`http://localhost:8081/question/${id}`,
                {
                    headers: {
                        authorization: localStorage.getItem("token")
                    }
                });

            if (response.status === 200) {
                setSuccess(true);
                if (router.asPath == "/") {
                    setTimeout(() => {
                        router.reload();
                    }, 1000);
                }
                else {
                    setTimeout(() => {
                        router.push("/");
                    }, 1000);
                }
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className={styles.questionWrapper}>
                <Link className={styles.link} href={`/question/${id}`}>
                    <div className={styles.questionTextWrapper}>
                        <h1 className={styles.title}>{title}</h1>
                        <div className={styles.text}>{text}</div>
                    </div>
                </Link>
                <button className={styles.deleteButton} onClick={deleteQuestion}>
                    <img src={trash.src} className={styles.trashImg} />
                </button>
                {isSuccess && <div className={styles.message}>Question was deleted</div>}
            </div>
        </>
    );
};

export default QuestionCard;