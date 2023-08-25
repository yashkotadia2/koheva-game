import React, { useEffect, useState } from "react";
import "../css/questions.css";
import 'animate.css';

// import { Radio, Select, Checkbox, Input } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";



const randomIndex = []

function FirstQuestion(props) {
    const options = ['']
    const [choices, setChoices] = useState([props.que.choice1, props.que.choice2])
    const [currStep, setCurrStep] = useState([])
    const [selectedChoice, setSelectedChoice] = useState([])
    var isChoiceCorrect = false;

    const handleClick = () => {
      if(props.que.answer === selectedChoice){
        isChoiceCorrect = true
      }
      else{
        isChoiceCorrect = false
      }
      console.log(isChoiceCorrect)
      props.handleNextCallback({step:currStep, isChoiceCorrect: isChoiceCorrect});
    };

  for(let i = 0; i < 15; i++) {
      let rNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0
      if(!randomIndex.includes(rNumber)){
        randomIndex.push(rNumber);
      }
      if(randomIndex.length == 2){
        break;
      }
  }

    console.log("randomIndex",randomIndex);
    useEffect(()=>{
      // setUpdatedAnswer(options)
      setCurrStep(props.step)

    },[])

    const onNext = () => {
      if(props.que.answer === selectedChoice){
        isChoiceCorrect = true
      }
      else{
        isChoiceCorrect = false
      }
      console.log(isChoiceCorrect)
      props.handleNextCallback({step:currStep, isChoiceCorrect: isChoiceCorrect});
  }

  console.log(props.que);
    return <div className="d-flex flex-column align-items-center main_que_container">
          <div className="hi_text animate__animated animate__fadeInUp">Hi, {props.name}</div>
          <div className="animate__animated animate__fadeInUp animate__delay-0.5s"><h4>Find Out Actual Koheva Product...</h4></div>
          {/* <div className="que_container animate__animated animate__fadeInUp animate__delay-1s">
            <div className="question">
              <div className="mt-4">{`${currStep - 2}) ${props.que.question}`}</div>
              <div className="options d-flex flex-row justify-content-center mt-4">
                <div class="wrapper">
                  <input type="radio" name="select" id="option-1"/>
                  <input type="radio" name="select" id="option-2"/>
                  <label for="option-1" onClick={(e) =>setSelectedChoice(e.target.innerHTML)} class="option option-1">
                    <div class="dot"></div>
                    <span>{choices[randomIndex[0]]}</span>
                  </label>
                  <label for="option-2" onClick={(e) =>setSelectedChoice(e.target.innerHTML)} class="option option-2">
                    <div class="dot"></div>
                    <span>{choices[randomIndex[1]]}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="animate__animated animate__fadeInUp animate__delay-2s">
            <span  onClick={()=>onNext()} class="arrow"></span>
          </div> */}
          <div className="row">
        <div className="mb-2">
          What is your website’s main goal for your coaching business?
        </div>
        <div className="checkboxdiv">
          <Checkbox value="A" onClick={handleClick}>
            Get more consult/discovery calls
          </Checkbox>
        </div>
        <div className="checkboxdiv">
          <Checkbox onClick={handleClick}>Consistent online purchases</Checkbox>
        </div>
        <div className="checkboxdiv">
          <Checkbox onClick={handleClick}>
            Grow my audience/email list subscribers
          </Checkbox>
        </div>
        <div className="checkboxdiv">
          <Checkbox onClick={handleClick}>
            Showcase & leverage my expertise into media/sponsor opportunities
          </Checkbox>
        </div>
      </div>
    </div>;
}

export default FirstQuestion;
