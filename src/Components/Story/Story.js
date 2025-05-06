import React, { useState } from "react";
import "./Story.css";
import topicsContent from "../../Data/topicsContent.json";
import quizData from "../../Data/quizData.json";
import { useNavigate } from "react-router-dom";

export default function History() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const content = topicsContent.story;
  const quiz = quizData.story;

  const navigate = useNavigate();

  const handleOption = (option) => {
    if (option === quiz[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };
  // const handleNext = () => {
  //   setShowScore(false);
  //   setCurrentQuestion(0);
  //   setScore(0);
  //   setShowQuiz(false);
  // };
  return (
    <div className="history">
      <div className="content">
        {!showQuiz && (
          <div>
            <h1>{content.title}</h1>
            <p>{content.content}</p>
            <button className="button" onClick={() => setShowQuiz(true)}>
              Start Quiz
            </button>
          </div>
        )}
        {showQuiz && !showScore && (
          <div className="question">
            <h2>
              {quiz[currentQuestion].id}. {quiz[currentQuestion].question}
            </h2>
            {quiz[currentQuestion].option.map((option, index) => (
              <div className="optionContent" key={index}>
                <label className="option">
                  <input
                    name="quiz-option"
                    type="radio"
                    onClick={() => handleOption(option)}
                    value={option}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        )}
        {showScore && (
          <div className="score">
            <h3>
              Your Score: {score}/{quiz.length}
            </h3>
            <button className="nextButton" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
