import './App.css';
import React, { useState, useEffect } from "react";

import FirstQuestion from "./components/FirstQuestion";
import SecondQuestion from "./components/SecondQuestion";
import ThirdQuestion from "./components/ThirdQuestion";
import FourthQuestion from "./components/FourthQuestion";
import Splash from "./components/Splash";
import GetUserName from "./components/getUserName";
import Win from "./components/Win";
import Looser from "./components/Looser";

import "bootstrap/dist/css/bootstrap.min.css";

const quiz = [
  {
    question:"1 Which One is Koheva Product & not Juice?",
    choice1:"1 OptionA",
    choice2:"1 OptionB",
    answer:"1 OptionB"
  },
  {
    question:"2 Which One is Koheva Product & not Juice?",
    choice1:"2 OptionA",
    choice2:"2 OptionB",
    answer:"2 OptionB"
  },  
  {
    question:"3 Which One is Koheva Product & not Juice?",
    choice1:"3 OptionA",
    choice2:"3 OptionB",
    answer:"3 OptionB"
  },  
  {
    question:"4 Which One is Koheva Product & not Juice?",
    choice1:"4 OptionA",
    choice2:"4 OptionB",
    answer:"4 OptionB"
  }
]

const totalSteps = 7;
var answerArray = [];

function App() {

  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('test');

  const [isWinner, setIsWinner] = useState(false);

  const handleCallback = (childData) => {
    setUsername(childData)
    setStep(step + 1);
  }

  const handleNextCallback = (childData) => {
  

    answerArray.push(childData.isChoiceCorrect)
    setStep(childData.step + 1);

    console.log("answerArray",answerArray);
    console.log("STEP",step);

    if(step === 6){
      if(answerArray.includes(false)){
        setIsWinner(false)
      }
      else{
        setIsWinner(true)
      }
    }
  }

  const handleStepChange = (type) => {
    if (step === totalSteps && type === "next") {
      return alert("You have already completed the last step");
    }
    if (type === "next") {
      if (step < totalSteps) {
        setStep(step + 1);
      }
    } 
  };

  useEffect(() => {
    if(step == 1){
      setTimeout(() => {
        setStep(step + 1);
    }, 6500);
    }
  }, []);

  return (
    <>
      <Splash/>
      {/* {step === 1 && <Splash handleStepChange={handleStepChange} />} */}
      {step === 2 && <GetUserName handleStepChange={handleStepChange} parentCallback={handleCallback} />}{" "}
      {step === 3 && <FirstQuestion que={quiz[0]} step={step} name={username} handleNextCallback={handleNextCallback}/>}
      {step === 4 && <SecondQuestion que={quiz[1]} step={step} handleNextCallback={handleNextCallback}/>}
      {step === 5 && <ThirdQuestion que={quiz[2]} step={step} handleNextCallback={handleNextCallback}/>}
      {step === 6 && <FourthQuestion que={quiz[3]} step={step} handleNextCallback={handleNextCallback}/>}
      {step === 7 && <Win isWinner={isWinner}/>}
    </>
  );
}

export default App;