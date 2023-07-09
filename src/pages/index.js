import React, { useState } from "react";
import axios from "axios";
import questionCard from "../components/questionCard/QuestionCard";
import styles from "./styles.module.css";
import QuestionCard from "../components/questionCard/QuestionCard";
import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer/Footer";

const QuestionsPage = ({ allQuestions }) => {
  const [questions, setQuestions] = useState(allQuestions);
  const [displayedQuestions, setDisplayedQuestions] =
    useState(allQuestions);

  return (
    <>
      <Navbar />

      <div className={styles.firstLineWrapper}>
        <h1 className={styles.sectionName}> Visi klausimai</h1>

        <a className={styles.newQuestion} href="/newQuestion">Užduoti klausimą</a>
      </div>

      <div className={styles.filterButtonsWrapper}>
        <button className={styles.answeredQuestions} onClick={() =>
          setDisplayedQuestions(() =>
            questions?.filter(
              (question) => question.answers_ids.length > 0
            )
          )
        }>Atsakyti klausimai</button>
        <button className={styles.notAnsweredQuestions} onClick={() =>
          setDisplayedQuestions(() =>
            questions?.filter(
              (question) => question.answers_ids.length == 0
            )
          )
        }
        >Neatsakyti klausimai</button>
      </div>


      <div className={styles.questionsWrapper}>
        <div className={styles.questionWrapper}>
          {displayedQuestions && displayedQuestions.map((question) => (
            <div key={question.id}>
              <QuestionCard
                id={question.id}
                title={question.title}
                text={question.text}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <Footer/> */}
    </>

  )
}

export default QuestionsPage

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:8081/questions");

    const { data } = response;
    const { questions } = data;
   
    return { props: { allQuestions: questions } };

  } catch (err) {
    console.log(err);
  }
}