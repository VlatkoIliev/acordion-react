import React, { useState } from "react";
import questions from "./Components/data";
import Question from "./Components/Question";

function App() {
  const [questionss, setQuestionss] = useState(questions);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questionss.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
