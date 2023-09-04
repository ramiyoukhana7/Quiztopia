import { useEffect, useState } from "react";
import Map from "./Map";

const ViewAll = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const response = await fetch(
        "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz"
      );
      const data = await response.json();
      console.log("API response:", data);
      setQuizzes(data.quizzes);
    };
    fetchQuizzes();
  }, []);

  return (
    <div>
      <h1>All Quizzes</h1>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <h2>Quiz Name: {quiz.quizId}</h2>
            <p>Created by: {quiz.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAll;
