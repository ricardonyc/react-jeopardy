import { display } from "@mui/system";
import React from "react";

function Question(props) {
  //   console.log(props);

  const { info } = props;

  return (
    <div>
      <h1 className="category">Category: "{info.category.title}"</h1>
      <div className="question--container">
        <h1 className="question--text">Question:</h1>
        <h1 className="question">{info.question}</h1>
      </div>
      <h2 className="value">Value: {info.value}</h2>
      {props.display && <h2 className="answer">Answer: {info.answer}</h2>}
      <button onClick={props.handleClick}>Show Answer</button>
      <button onClick={props.addPoints} className="correct">
        Correct
      </button>

      <button onClick={props.subtractPoints} className="incorrect">
        Incorrect
      </button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

export default Question;
