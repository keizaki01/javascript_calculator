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
  
  function　for_common(){
    if(operater.includes(lastString) && operater.includes(selected)){
      display.value = display.value.slice(0,-1) + selected;
    }
    else if(operater.includes(firstString) && number.includes(selected)){
      display.value = display.value.slice(1) + selected;
    }
    else if(zero.includes(firstString) && number.includes(selected)){
      display.value = display.value.slice(1) + selected;
    }
    else if(zero.includes(firstString) && zero.includes(selected)){
      display.value = display.value.slice(1) + selected;
    }  
    else{
    display.value += selected
    }
  }
  
  function for_normal(){
    if(operater.includes(lastString) && zero.includes(selected)){
    display.value  = display.value.slice(0,-1) ;
    }
    else if(zero.includes(lastString) && zero.includes(selected)){
      display.value  = display.value.slice(0,-1) ;
    }
    else{
    ;
    }
  }
  
  function for_dot(){
    if(dot.includes(firstString)){
    display.value =0 + display.value ;
    }
      // else if(dot.includes(lastString)){
      //   display.value =0 + display.value ;
      // }
    else if(number.includes(lastString)){
    display.value = display.value ;
    }
    else{
    ;
    }
  }
  
  function zero_removeDisabled(){
    if(number.includes(selected)){
    document.getElementById("zerozero").disabled=false;
    }
  }
  
   function setDisabled_for_dot(){
    if(operater.includes(selected) || dot.includes(selected))
    { document.getElementById("point").disabled=true;
    }
  }
    
  function setDisabled_for_zero(){
    if(operater.includes(selected))
    {document.getElementById("zerozero").disabled=true;
    }
  }
  
  function removeDisabled(){
    if(number.includes(selected)){
    document.getElementById("point").disabled=false;
    }
    else if(zero.includes(selected)){
    document.getElementById("point").disabled=false;
    }
  }
  
  zero_removeDisabled()
  removeDisabled()
  setDisabled_for_dot()
  setDisabled_for_zero()
  for_common()
  for_normal()
  for_dot()
  
  display = display.value
  return display;
}
  
function calc(display){
  const process = document.getElementById("display").value
  const total = new Function( `return `+process)
  update(total())
}
