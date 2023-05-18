import { useState } from "react";
import "./App.css";

function App() {
  var firstChoice, secondChoice, block1, block2;
  const cards = ["😺", "🐶", "💀", "🐱‍👤", "😁", "🐱‍🐉", "🐱‍🏍", "🐱‍🚀",'😎'];
  const choices = [...cards, ...cards];
  const checkanswer = () => {
    if (firstChoice === secondChoice){}
    else {
      block1.target.innerHTML = "";
      block2.target.innerHTML = "";
    }
    firstChoice = secondChoice = "";
  };
  const handleClick = (e, element) => {
    if (!firstChoice) {
      firstChoice = e;
      block1 = element;
      element.target.innerHTML = e;
    } else {
      secondChoice = e;
      block2 = element;
      element.target.innerHTML = e;
      setTimeout(() => {
        checkanswer();
      }, 500);
    }
  };
  return (
    <>
      <div className="grid">
        {choices
          .sort(() => Math.random() - 0.5)
          .map((e, i) => {
            return (
              <div
                className="card"
                key={i}
                onClick={(element) => {
                  if (element.target.innerHTML === e) {
                  } else {
                    handleClick(e, element);
                  }
                }}
              ></div>
            );
          })}
      </div>
    </>
  );
}

export default App;
