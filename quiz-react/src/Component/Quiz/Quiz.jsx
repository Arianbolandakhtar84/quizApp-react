import React from "react";
import "./Quiz.css";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          questionText: "What is the capital of France?",
          answerOptions: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false },
          ],
        },
        {
          questionText: "Which country win the World Cup(2022)?",
          answerOptions: [
            { answerText: "France", isCorrect: false },
            { answerText: "Argentina", isCorrect: true },
            { answerText: "Germany", isCorrect: false },
            { answerText: "Danmark", isCorrect: false },
          ],
        },
        {
          questionText: "Who created JS?",
          answerOptions: [
            { answerText: "Eich", isCorrect: true },
            { answerText: "Mosk", isCorrect: false },
            { answerText: "Bezos", isCorrect: false },
            { answerText: "Gates", isCorrect: false },
          ],
        },
        {
          questionText: "What is the best series in the history(IMDB)?",
          answerOptions: [
            { answerText: "Walking Dead", isCorrect: false },
            { answerText: "Chernobyl", isCorrect: false },
            { answerText: "Vikings", isCorrect: false },
            { answerText: "Breaking Bad", isCorrect: true },
          ],
        },
      ],
      currentQuestion: 0,
      showScore: false,
      score: 0,
    };
  }

  clickHandler(isCorrect) {
    console.log(isCorrect);

    if (isCorrect) {
      this.setState((prevState) => {
        return {
          score: prevState.score + 1,
        };
      });
    }

    if (this.state.currentQuestion === 3) {
      this.setState({ showScore: true });
    } else {
      this.setState((prevState) => {
        return {
          currentQuestion: prevState.currentQuestion + 1,
        };
      });
    }
  }

  render() {
    return (
      <div className="app">
        {this.state.showScore ? (
          <div className="score-section">
            You scored {this.state.score} out of {this.state.questions.length}
          </div>
        ) : (
          <div>
            <div className="question-section">
              <div className="question-count">
                <span>Question {this.state.currentQuestion + 1}</span>/{" "}
                {this.state.questions.length}
              </div>
              <div className="question-text">
                {this.state.questions[this.state.currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {this.state.questions[
                this.state.currentQuestion
              ].answerOptions.map((answer) => (
                <button
                  onClick={this.clickHandler.bind(this, answer.isCorrect)}
                >
                  {answer.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
