import React, { useState } from "react";
import axios from "axios";
import questionCard from "../components/questionCard/QuestionCard";
import styles from "./styles.module.css";
import QuestionCard from "../components/questionCard/QuestionCard";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer/Footer";

const QuestionsPage = ({ allQuestions }) => {
  const [questions, setQuestions] = useState(allQuestions);

  return (
    <>
    
      {/* <Navbar/> */}

      <div className={styles.questionsWrapper}>
        <div className={styles.questionWrapper}>
          {questions && questions.map((question) => (
            <div key={question.id}>
              <QuestionCard
                id={question.id}
                title={question.title}
                text={question.text} />
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