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
            setUserId(localStorage.getItem("UserId"));
            const response = await axios.post("http://localhost:8081/question", {
                title: title,
                text: text,
                id: userId,
            }, {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });

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

            <div className={styles.questionForm}>
                <input
                    className={styles.titleInput}
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Title"
                />

                < textarea
                    className={styles.textInput}
                    name="text"
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Write text here"
                />

                <button className={styles.addButton} onClick={addNewQuestion}>Add a new question</button>

                {isSuccess && <div>Question was added successfully</div>}
            </div>

            {/* <Footer/> */}
        </div>
    );
};

export default NewQuestionPage;