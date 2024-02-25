import styles from "./App.module.css"
import Display from "./components/Display"
import ButtonContainer from "./components/buttonContainer"
import { useState } from "react"

function App() {

  const [calval ,setVal] = useState("");
  const onButtonClick = (buttonText) =>{
    console.log(buttonText)
    if(buttonText === "C"){
      setVal("");
    }else if(buttonText === "="){
      const res = eval(calval);
      setVal(res);
    }else{
       const newVal = calval + buttonText;
       setVal(newVal);
    }
  }  
 
return (
<div className={styles.calculator}>
  <Display display_val ={calval} ></Display>
  <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
</div>
) 
}

export default App
