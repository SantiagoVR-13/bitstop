import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Onboarding.scss";

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

  {
    question: "How do we make a difference? 💪",
    answer:
      "This isn't just a theory; it's backed by research. (Source: **[Harvard Business Review](https://hbr.org/)**) Together, we can create a more open and empathetic digital space. 🧠❤️",
  },
  {
    question: "What can you expect here? 🌟",
    answer:
      "Expect to encounter thought-provoking content and engage in respectful discussions.💥🤔",
  },
  {
    question: "What can you expect here? 🌟",
    answer:
      "You'll be part of a community that values diversity of thought and encourages constructive dialogue. Your voice matters here. 🗣️🌈",
  },
  {
    question: "Step 1 🌟 - EXPLORE",
    answer:
      "Challenge your assumptions, by analyzing different simple questions. Value perspective, practice empathy. 🗣️🌈",
  },
  {
    question: "Step 2 🌟 - JOURNAL ",
    answer:
      "Form own opinions by writing private journals or sharing opinions 🗣️🌈",
  },
  {
    question: "How can you contribute? 🙌",
    answer:
      "Share your insights, question your assumptions, and listen to others with an open arms, heart and mind. 🧠❤️ ",
  },
  {
    question: "How can you contribute? 🙌",
    answer:
      "By actively participating in our community, you're helping us achieve our mission of breaking down digital barriers. 🤝🌱",
  },
  {
    question: "Is this just BS, or does it work? 📈",
    answer:
      "It's not just talk; it's a movement. Our approach is grounded in research and real-world impact. Join us in reshaping digital discourse. Together, we'll make a difference. 📚🌠",
  },
  {
    question: "Ready to get started? Let's do this! 💥",
    answer:
      "We're thrilled to have you on board. Together, we'll challenge assumptions, foster empathy, and create a more inclusive digital world. Your journey begins now. 🌍🚀",
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
            Next
          </button>
        </div>
        <Link to="/question" className="skip-button">
          Skip
        </Link>
      </div>
    </div>
  );
}

export default Onboarding;
