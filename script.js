function update(selected){
  const display = document.getElementById("display").value = selected
  const dot = ["."];
  const ac = ["0"];
  
  function ac_setDisabled(){
    if(ac.includes("0")){
    document.getElementById("point").disabled=true;
    document.getElementById("zerozero").disabled=true;
    }
  }
  
  ac_setDisabled()
}

function append(selected){
  const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9",];
  const zero = ["0"];
  const operater = ["+", "-", "*", "/"];
  const dot = ["."];
  const ac = ["AC"];
  const display = document.getElementById("display")
  const lastString = display.value.slice(-1)
  const firstString = display.value.slice(0,1)
  const secondString = display.value.slice(0,2)
  
  function zero_removeDisabled(){
    if(number.includes(selected)){
    document.getElementById("zerozero").disabled=false;
    }
  }
  
  function removeDisabled(){
    if(number.includes(selected) && dot.includes(display) === false){
    document.getElementById("point").disabled=false;
    }
    else if(zero.includes(selected) && dot.includes(display) === false){
    document.getElementById("point").disabled=false;
    }
  }
  
  function setDisabled(){
    if(dot.includes(display) === true)
    {document.getElementById("point").disabled=true;
    }
    else if(operater.includes(selected)){
    document.getElementById("zerozero").disabled=true;
    document.getElementById("point").disabled=true;
    }
  }
  
  
  zero_removeDisabled()
  removeDisabled()
  setDisabled()
  
  function for_dot(){
    if(dot.includes(lastString) && number.includes(selected)){
    display.value = display.value ;
    }
    else if(dot.includes(lastString) && zero.includes(selected)){
    display.value = display.value + selected;
    }
    else if(zero.includes(lastString) && number.includes(selected)){
    display.value = display.value ;
    }
    else if(zero.includes(firstString) && number.includes(selected)){
    display.value = 0 + display.value ;
    }
    else if(operater.includes(lastString) && number.includes(selected)){
    display.value = 0 + display.value;
    }
    else if(number.includes(lastString) && number.includes(selected)){
    display.value = 0 + display.value;
    }
    else if(number.includes(firstString) && number.includes(selected)){
    display.value = display.value.slice(1);
    }
    else if(operater.includes(lastString) && zero.includes(selected)){
    display.value = display.value + selected;
    }
  }
   
  for_dot()
  
  if(operater.includes(lastString) && operater.includes(selected)){
    display.value = display.value.slice(0,-1) + selected;
  }
  else if(operater.includes(firstString) && number.includes(selected)){
    display.value = display.value.slice(1) + selected;
  }
  else if(zero.includes(firstString) && number.includes(selected)){
    display.value = display.value.slice(1) + selected;
  }
  
  else if(zero.includes(firstString) && dot.includes(secondString)){
    display.value = display.value + selected;
  }
  else if(zero.includes(firstString) && zero.includes(selected)){
    display.value = display.value.slice(0,-1) + selected;
  }else if(dot.includes(lastString) && operater.includes(selected)){
    display.value = display.value.slice(0,-1);
  }
  else if(operater.includes(firstString) && dot.includes(selected)){
    display.value = display.value.slice(0,-1);
  }
 
  else{
    display.value += selected
  }
  }


function calc(){
  const process = document.getElementById("display").value
  const total = new Function( `return `+process)
  update(total())
}




