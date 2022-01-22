import { useState } from "react";
import "./App.css";
import Question from "./components/Question";

function App() {
  const [data, setData] = useState([]);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  function toggleAnswer() {
    setDisplayAnswer((prevState) => !prevState);
  }

  function getQuestion() {
    fetch(`http://jservice.io/api/random`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  console.log(data.id);
  console.log(data);

  return (
    <div>
      <h1 className="welcome">WELCOME TO JEOPARDY!</h1>
      {data.map((item) => {
        return (
          <Question
            info={item}
            key={item.id}
            display={displayAnswer}
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
