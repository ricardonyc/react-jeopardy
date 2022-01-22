import { display } from "@mui/system";
import React from "react";

function Question(props) {
  //   console.log(props);

  const { info } = props;

  return (
    <div>
      <h1>Question:</h1>
      <h1 className="question">{info.question}</h1>
      <h2 className="value">Value: {info.value}</h2>
      {props.display && <h2 className="answer">Answer: {props.info.answer}</h2>}
      <button onClick={props.handleClick}>Show Answer</button>
    </div>
  );
}

export default Question;
