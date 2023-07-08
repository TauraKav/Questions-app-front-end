import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./AnswerCard.module.css";
import like from "../../assets/like.png";
import trash from "../../assets/trash.png";
import dislike from "../../assets/dislike.png";
import axios from "axios";

const AnswerCard = ({ likes, id, text }) => {
    const router = useRouter();

    const deleteAnswer = async () => {
        try {
            const response = await axios.delete(`http://localhost:8081/answer/${id}`,
                {
                    headers: {
                        authorization: localStorage.getItem("token")
                    }
                });

            if (response.status === 200) {
                setTimeout(() => {
                    router.reload();
                }, 1000);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className={styles.answerWrapper}>
                        <div className={styles.text}>{text}</div>
                        <button className={styles.deleteButton} onClick={deleteAnswer}>
                    <img src={trash.src} className={styles.trashImg} />
                </button>
                    </div>
                
        </>
    );
};

export default AnswerCard;