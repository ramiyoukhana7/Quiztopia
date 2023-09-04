import { useState } from "react";
import Map from "./Map";
import AddQuestion from "./AddQuestion";

const CreateQuiz = () => {
  const [quizName, setQuizName] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateQuiz = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      setMessage("You must be logged in to create a quiz");
      return;
    }

    const url = "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz";
    const settings = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: quizName,
      }),
    };

    const response = await fetch(url, settings);
    const data = await response.json();

    if (response.status === 401) {
      setMessage("Invalid token.");
      return;
    }

    if (data.success) {
      setMessage(`Quiz ${data.quizId} created`);
    } else {
      setMessage("Failed to create quiz");
    }
  };

  return (
    <div className="container">
      <h1>Create Quiz</h1>
      <label>
        Quiz Name:
        <input
          type="text"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          required
        />
      </label>
      <button onClick={handleCreateQuiz}>Create Quiz</button>
      <p>{message}</p>
      <AddQuestion quizName={quizName} />
      <Map />
    </div>
  );
};

export default CreateQuiz;
