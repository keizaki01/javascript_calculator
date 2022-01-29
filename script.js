function update(selected){
  document.getElementById("display").value = selected
}

function append(selected){
  const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00"];
  const operater = ["+", "-", "*", "/", "."];
  const display = document.getElementById("display")
  const lastString = display.value.slice(-1)
  if(operater.includes(lastString) && operater.includes(selected)){
    display.value = display.value.slice(0,-1) + selected;
  }else{
    display.value += selected
  }
}

function calc(){
  const process = document.getElementById("display").value
  const total = new Function( `return `+process)
  update(total())
}
