import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";

const NewQuestionPage = () => {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [userId, setUserId] = useState("");
    const [isSuccess, setSuccess] = useState(false);

    const addNewQuestion = async () => {
        try {
            setUserId (localStorage.getItem("UserId"));
            const response = await axios.post("http://localhost:8081/question", {
                title: title,
                text: text,
                id: userId,
            }, {headers: {
                authorization: localStorage.getItem("token")
              }});
              console.log(response.status);

            if (response.status === 200) {
                setSuccess(true);

                setTimeout(() => {
                    router.push("/");
                }, 2000);
            }

        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div>
            <Navbar />

            <div className={styles.tripForm}>
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Title"
                />

                <input
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Text"
                />

                <button onClick={addNewQuestion}>Add a new question</button>

                {isSuccess && <div>Question was added successfully</div>}
            </div>

            {/* <Footer/> */}
        </div>
    );
};

export default NewQuestionPage;