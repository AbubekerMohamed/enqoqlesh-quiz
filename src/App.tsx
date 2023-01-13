import "./App.css";
import { useEffect, useState } from "react";

import Start from "./components/Start";
import Timer from "./components/Timer";
import Quizzes from "./components/Quizzes";
import { data } from "./assets/dummy_data/dummyData";
import { moneyPyramid } from "./assets/dummy_data/moneyLevel";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("Br. 0");
  const [status, setStatus] = useState("Sorry");

  useEffect(() => {
    const prevQuestion = questionNumber - 1;
    const mid = moneyPyramid[prevQuestion]?.id;
    if (questionNumber > 1 && mid) {
      setEarned(moneyPyramid.find((m) => m.id === prevQuestion)!.amount);
    }
    switch (questionNumber) {
      case 0:
        setStatus("Sorry");
        break;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        setStatus("Not Bad");
        break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        setStatus("Good Job");
        break;
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        setStatus("Superb");
        break;
    }
  }, [questionNumber]);

  const restartGame = () => {
    setEarned("Br. 0");
    setQuestionNumber(1);
    setTimeOut(false);
  };
  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <>
                <h1 className="relative m-auto items-center text-2xl font-black">{`You have earned ${earned}`}</h1>
                <h1 className="relative m-auto items-center text-4xl font-black">
                  {status}
                </h1>
                <button
                  onClick={restartGame}
                  className="relative m-auto items-center bg-blue-900 rounded px-3 py-2"
                >
                  Restart
                </button>
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Quizzes
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m, index) => (
                <li
                  key={index}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
