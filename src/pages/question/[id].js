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
    const [questionText, setQuestionText] = useState();
    const [answerText, setAnswerText] = useState();
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
            setQuestionText(question[0].text);
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

    const addNewAnswer = async () => {
        try {
            const response = await axios.post(`http://localhost:8081/question/${router.query.id}/answer`, {
                text: answerText
            }, {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });

            if (response.status === 200) {
                setTimeout(() => {
                    router.reload();
                }, 2000);
            };
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Navbar />
            <QuestionCard
                title={title}
                id={questionId}
                text={questionText}
            />
            <div className={styles.answerTextArea}>
                <h2 className={styles.addAnswerTitle}> Jūsų atsakymas</h2>
                < textarea
                    className={styles.answerTextInput}
                    name="text"
                    onChange={(event) => setAnswerText(event.target.value)}
                    placeholder="Rašykite savo atsakymą čia"
                />
                <button className={styles.answerButton} onClick={addNewAnswer}>Pridėti atsakymą</button>
            </div>

            <h2 className={styles.answersTitle}> Atsakymai:</h2>
            {answers && answers.map((answer, index) => (
                <div key={answer.id}>
                    <AnswerCard
                        id={answer.id}
                        text={answer.text}
                        likes={answer.gained_likes_number} 
                        index={index + 1} />
                </div>
            ))}
        </>
    )
}

export default questionPage