import { useEffect, useState } from "react";
import Map from "./Map";

const ViewAll = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizData, setQuizData] = useState(null);

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

  useEffect(() => {
    const fetchQuizData = async () => {
      if (selectedQuiz) {
        const url = `https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/quiz/${selectedQuiz.userId}/${selectedQuiz.quizId}`;
        const response = await fetch(url);
        const data = await response.json();
        setQuizData(data.quiz);
      }
    };
    fetchQuizData();
  }, [selectedQuiz]);

  return (
    <div>
      <h1>All Quizzes</h1>
      <select onChange={(e) => setSelectedQuiz(JSON.parse(e.target.value))}>
        <option value="">Select a quiz</option>
        {quizzes.map((quiz, index) => (
          <option
            key={index}
            value={JSON.stringify({ userId: quiz.userId, quizId: quiz.quizId })}
          >
            {quiz.quizId}
          </option>
        ))}
      </select>

      {quizData && <Map questions={quizData.questions} />}
    </div>
  );
};

export default ViewAll;
