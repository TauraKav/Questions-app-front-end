import React from "react";
import styles from "./QuestionCard.module.css";
import Link from "next/link";

const QuestionCard = ({ title, id, text }) => {
    return (
        <>
            <Link className={styles.link} href={`/question/${id}`}>
                <div className={styles.questionWrapper}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.text}>{text}</div>

                </div>
            </Link>
        </>
    );
};

export default QuestionCard;