import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./AnswerCard.module.css";
import like from "../../assets/like.png";
import trash from "../../assets/trash.png";
import dislike from "../../assets/dislike.png";
import axios from "axios";

const AnswerCard = ({ likes, id, text, index }) => {
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

    const likeAnswer = async () => {
        await updateLike(1);
    }

    const dislikeAnswer = async () => {
        await updateLike(-1);
    }

    const updateLike = async (like) => {
        try {
            const response = await axios.put(`http://localhost:8081/answer/${id}`,
                {
                    gained_likes: like
                },
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
    }

    return (
        <>
            <div className={styles.answerWrapper}>
                <div className={styles.textWrapper}>
                    <div className={styles.answerNumber}>{index}.</div>
                    <div className={styles.text}>{text}</div>
                </div>

                <div className={styles.buttonsWrapper}>
                    <button className={styles.deleteButton} onClick={deleteAnswer}>
                        <img src={trash.src} className={styles.trashImg} />
                    </button>
                    <button className={styles.likeButton} onClick={likeAnswer}>
                        <img src={like.src} className={styles.likeImg} />
                    </button>
                    <div className={styles.likesNumber}>{likes} votes </div>

                    <button className={styles.likeButton} onClick={dislikeAnswer}>
                        <img src={dislike.src} className={styles.likeImg} />
                    </button>
                </div>
            </div>

        </>
    );
};

export default AnswerCard;