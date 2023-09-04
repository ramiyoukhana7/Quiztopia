import { useState } from "react";

const AddQuestion = ({ quizName }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [message, setMessage] = useState("");

  const handleAddQuestion = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      setMessage("Log in to add a question");
      return;
    }

    const url =
      "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz/question";
    const questionData = {
      name: quizName,
      question: question,
      answer: answer,
      location: {
        longitude: lng.toString(),
        latitude: lat.toString(),
      },
    };

    const settings = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(questionData),
    };

    const response = await fetch(url, settings);
    const data = await response.json();

    if (data.success) {
      setMessage("Question added");
    } else {
      setMessage("Failed to add question");
    }
  };

  return (
    <div>
      <label>
        Question:
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </label>
      <label>
        Answer:
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
      </label>
      <label>
        Latitude:
        <input
          type="number"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          required
        />
      </label>
      <label>
        Longitude:
        <input
          type="number"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
          required
        />
      </label>
      <button onClick={handleAddQuestion}>Add Question</button>
      <p>{message}</p>
    </div>
  );
};

export default AddQuestion;
