import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import Error from "./components/Error";
import Score from "./components/Score";

function App() {
  const [data, setData] = useState([]);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [score, setScore] = useState(0);

  function toggleAnswer() {
    setDisplayAnswer((prevState) => !prevState);
  }

  function getQuestion() {
    fetch(`http://jservice.io/api/random`)
      .then((res) => res.json())
      .then((data) => setData(data));

    // hide answer when getting new question
    setDisplayAnswer(false);
  }

  function addPoints() {
    let value = 0;
    data.map((item) => (value = item.value));
    setScore((prevScore) => prevScore + value);
  }

  function subtractPoints() {
    let value = 0;
    data.map((item) => (value = item.value));
    setScore((prevScore) => prevScore - value);
  }

  function resetScore() {
    setData([]);
    setScore(0);
  }

  return (
    <div>
      <h1 className="welcome">WELCOME TO JEOPARDY!</h1>
      <Score points={score} />
      {data.map((item) => {
        if (item.value === null) {
          return <Error />;
        }
        return (
          <Question
            info={item}
            key={item.id}
            display={displayAnswer}
            addPoints={addPoints}
            subtractPoints={subtractPoints}
            reset={resetScore}
            handleClick={toggleAnswer}
          />
        );
      })}

      <button onClick={getQuestion}>Get Question</button>
    </div>
  );
}

export default App;

// imrr - BrowserRouter, Route, NavLink
// imrse - useState, useEffect
// ctrl + alt + L - console.log
