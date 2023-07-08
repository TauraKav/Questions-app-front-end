import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar";
import QuestionCard from "../../components/questionCard/QuestionCard";
import Footer from "../../components/footer/Footer";
import { useRouter } from "next/router";
import AnswerCard from "@/components/answerCard/AnswerCard";


const questionPage = () => {
    const [title, setTitle] = useState();
    const [text, setText] = useState();
    const [questionId, setQuestionId] = useState();
    const [answers, setAnswers] = useState();
    const router = useRouter();

    const fetchEvent = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8081/question/${router.query.id}/answers`,
            );

            const { data } = response;
            const { question } = data;

            setTitle(question[0].title);
            setText(question[0].text);
            setQuestionId(question[0].id);
            setAnswers(question[0].answers);

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
        <>
            <Navbar />
            <QuestionCard
                title={title}
                id={questionId}
                text={text}
            />
            <h1 className={styles.answersTitle}> Atsakymai:</h1>
            {answers && answers.map((answer, index) => (
                <div key={answer.id}>
                    <div className={styles.answerNumber}>{index + 1}.</div>
                    <AnswerCard
                        id={answer.id}
                        text={answer.text}
                        likes={3} />
                </div>
            ))}



        </>

    )
}

export default questionPage