import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Onboarding.scss";
import right from "../../Assets/Icons/right-arrow.png";

const dataArray = [
  {
    question: "Welcome Bitstop!",
    answer:
      "A platform that empowers you to break free from echo chambers and broaden your perspective.",
  },
  {
    question: "Problem Space 🚀",
    answer:
      " In today's digital age, we often find ourselves in information bubbles, hearing only what we want to hear. This can lead to misunderstandings and division.🌍🤝🌍🤝",
  },
  {
    question: "Why does this matter? 🤔",
    answer:
      " Research (Source: [Pew Research](https://www.pewresearch.org/)) shows that diverse perspectives can help bridge gaps and build understanding. So, 'Y' WHY?  not explore different Ys with us? 🌐✨",
  },
  {
    question: "What is our Goal? 🚀",
    answer:
      "Our goal is to foster understanding, empathy, and critical thinking in a world filled with digital divides. Let's find answers to the questions that matter. 🌍🤝🌍🤝",
  },
  {
    question: "How do we make a difference? 💪",
    answer:
      "By engaging with viewpoints that challenge your own, you'll develop critical thinking skills and gain a deeper understanding of the world.🧠❤️",
  },
];

function Onboarding() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextClick = () => {
    if (currentQuestion < dataArray.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBackClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="onboarding">
      <div className="onboarding__question-list">
        <div className="onboarding__question-div">
          <p className="onboarding__title">
            {dataArray[currentQuestion].question}
          </p>
          <p className="onboarding__text">
            {dataArray[currentQuestion].answer}
          </p>
        </div>
        <div className="onboarding-navigation">
          <button
            className="back-button"
            onClick={handleBackClick}
            disabled={currentQuestion === 0}
          >
            Back
          </button>
          <button
            className="next-button"
            onClick={handleNextClick}
            disabled={currentQuestion === dataArray.length - 1}
          >
            <img className="right-logo" src={right} alt="Right arrow" />
          </button>
        </div>
        <Link to="/login" className="skip-button">
          Skip
        </Link>
      </div>
    </div>
  );
}

export default Onboarding;
