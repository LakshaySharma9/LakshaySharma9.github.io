function appendToInput(value) {
    document.getElementById('expressionInput').value += value;
  }
  
  function clearInput() {
    document.getElementById('expressionInput').value = '';
  }
  
  function deleteCharacter() {
    let input = document.getElementById('expressionInput');
    input.value = input.value.slice(0, -1);
  }
  
  function calculateResult() {
    let input = document.getElementById('expressionInput').value;
    let result = eval(input);
    document.getElementById('resultArea').innerHTML = `${input} = ${result}`;
    document.getElementById('expressionInput').value = input + ' = ' + result;
  }
  
