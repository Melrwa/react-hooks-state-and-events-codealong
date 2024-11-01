import React, { useState } from "react";

function Toggle() {
  const [isOff, setIoff]=useState(true)
  function handleToggle(event){
   setIoff((isOff)=>!isOff)
  
  }

  return <button onClick={handleToggle} style={{background: isOff? "red":"green"}}>{isOff? "OFF":"ON" }</button>;
}

export default Toggle;
