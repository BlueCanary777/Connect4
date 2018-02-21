import React from 'react';
const ButtonSelector = (props) => {

  function buttonClick(event){
    props.click(event.target.id);
    console.log(event.target.id)

  }
  return (
    <div>
    <button id="1" onClick={buttonClick}>Button1</button>
    <button id="2" onClick={buttonClick}>Button2</button>
    <button id="3" onClick={buttonClick}>Button3</button>
    <button id="4" onClick={buttonClick}>Button4</button>
    <button id="5" onClick={buttonClick}>Button5</button>
    <button id="6" onClick={buttonClick}>Button6</button>
    <button id="7" onClick={buttonClick}>Button7</button>
    </div>
  )
}
export default ButtonSelector;
