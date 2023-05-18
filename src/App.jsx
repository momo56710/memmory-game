import { useState, useRef } from "react";
import "./App.css";

function App() {
  const winner = useRef();
  const again = useRef();
  var firstChoice, secondChoice, block1, block2, count;
  count = 0;
  const cards = [
    "😺",
    "🐶",
    "💀",
    "🐱‍👤",
    "😁",
    "🐱‍🐉",
    "🐱‍🏍",
    "🐱‍🚀",
    "😎",
  ];
  const choices = [...cards, ...cards];
  const handleWinning = () => {
    if (count === 9) {
      winner.current.innerHTML = `wp! <br> refresh to restart`;
      
    }
  };
  const checkanswer = () => {
    if (firstChoice === secondChoice) {
      count ++
    } else {
      block1.target.innerHTML = "";
      block2.target.innerHTML = "";
    }
    firstChoice = secondChoice = "";
    handleWinning();
  };
  const handleClick = (e, element) => {
    if (!secondChoice) {
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
    }
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
        }}
      >
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
        <div ref={winner} style={{textAlign : "center"}}></div>
      </div>
    </>
  );
}

export default App;
