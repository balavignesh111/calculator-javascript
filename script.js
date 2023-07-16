'use script';

// input
const inputElement = document.querySelectorAll('.input');

const displayInputElement = document.querySelector('.input-text');

const displayOutputElement = document.querySelector('.result'); 

// gv

let valueArray = [];

// functions

const checkDivision = (arr)=>{
  let divisionIndex = arr.indexOf('÷');
  while(divisionIndex !== -1){
    let numBeforeDivision = '';
    let numAfterDivision = '';
    let numBeforeDivisionIndex;
    let numAfterDivisionIndex;
    let difference;
    for(let i=divisionIndex-1;i>=0;i--){
      if((arr[i] === 'x') || (arr[i] === '+') || (arr[i] === '-') || (arr[i] === '÷')){
        break;
      }else{
        numBeforeDivision = arr[i] + numBeforeDivision;
        numBeforeDivisionIndex = i;
      }
    }
    for(let i=divisionIndex+1;i<arr.length;i++){
      if((arr[i] === 'x') || (arr[i] === '+') || (arr[i] === '-') || (arr[i] === '÷')){
        break;
      }else{
        numAfterDivision = numAfterDivision + arr[i];
        numAfterDivisionIndex = i;
      }
    }
    let result = Number(numBeforeDivision) / Number(numAfterDivision);
    result = String(result);
    difference = (numAfterDivisionIndex - numBeforeDivisionIndex) + 1; 
    //to remove element before and after division operator
    arr.splice(numBeforeDivisionIndex,difference);
    // to add the result
    arr.splice(numBeforeDivisionIndex,0,result);
    divisionIndex = arr.indexOf('÷');
    if(divisionIndex === -1){
      return arr;
    }
  }

}

const checkDecimalPlace = (str)=>{
  str = str.split("");
  let decimalCount = 0;
  let index = str.indexOf('.')+1;
  for(let i=index;i<str.length;i++){
    decimalCount += 1;
  }
  return decimalCount;
}

const checkMultiplication = (arr)=>{
  let multiplyIndex = arr.indexOf('x');
  while(multiplyIndex !== -1){
    let numBeforeMultiply = '';
    let numAfterMultiply = '';
    let numBeforeMultiplyIndex;
    let numAfterMultiplyIndex;
    let difference;
    for(let i=multiplyIndex-1;i>=0;i--){
      if((arr[i] === '÷') || (arr[i] === '+') || (arr[i] === '-') || (arr[i] === 'x') ){
        break;
      }else{
        numBeforeMultiply = arr[i] + numBeforeMultiply;
        numBeforeMultiplyIndex = i;
      }
    }
    for(let i=multiplyIndex+1;i<arr.length;i++){
      if((arr[i] === '÷') || (arr[i] === '+') || (arr[i] === '-') || (arr[i] === 'x')){
        break;
      }else{
        numAfterMultiply = numAfterMultiply + arr[i];
        numAfterMultiplyIndex = i;
      }
    }
    let result = Number(numBeforeMultiply) * Number(numAfterMultiply);
    if(arr.includes('.')){
      let decimalCount = checkDecimalPlace(numBeforeMultiply) + checkDecimalPlace(numAfterMultiply);
      if(checkDecimalPlace((String(result))) > decimalCount){
        result = result.toFixed(decimalCount);
      }
    }
    result = String(result);
    difference = (numAfterMultiplyIndex - numBeforeMultiplyIndex) + 1; 
    //to remove element before and after division operator
    arr.splice(numBeforeMultiplyIndex,difference);
    // to add the result
    arr.splice(numBeforeMultiplyIndex,0,result);
    multiplyIndex = arr.indexOf('x');
    if(multiplyIndex === -1){
      return arr;
    }
  }
}

const checkAddition = (arr)=>{
  let additionIndex = arr.indexOf('+');
  while(additionIndex !== -1){
    let numBeforeAddition = '';
    let numAfterAddition = '';
    let numBeforeAdditionIndex;
    let numAfterAdditionIndex;
    let difference;
    for(let i=additionIndex-1;i>=0;i--){
      if((arr[i] === '÷') || (arr[i] === '+') || (arr[i] === '-') || (arr[i] === 'x') ){
        break;
      }else{
        numBeforeAddition = arr[i] + numBeforeAddition;
        numBeforeAdditionIndex = i;
      }
    }
    for(let i=additionIndex+1;i<arr.length;i++){
      if((arr[i] === '÷') || (arr[i] === '+') || (arr[i] === '-') || (arr[i] === 'x')){
        break;
      }else{
        numAfterAddition = numAfterAddition + arr[i];
        numAfterAdditionIndex = i;
      }
    }
    let result = Number(numBeforeAddition) + Number(numAfterAddition);
    result = String(result);
    difference = (numAfterAdditionIndex - numBeforeAdditionIndex) + 1; 
    //to remove element before and after division operator
    arr.splice(numBeforeAdditionIndex,difference);
    // to add the result
    arr.splice(numBeforeAdditionIndex,0,result);
    additionIndex = arr.indexOf('+');
    if(additionIndex === -1){
      return arr;
    }
  }
}

const checkSubtraction = (arr)=>{
  let subtractionIndex = arr.indexOf('-');
  while(subtractionIndex !== -1){
    let numBeforeSubtraction = '';
    let numAfterSubtraction = '';
    let numBeforeSubtractionIndex;
    let numAfterSubtractionIndex;
    let difference;
    for(let i=subtractionIndex-1;i>=0;i--){
      if((arr[i] === '÷') || (arr[i] === '+') || (arr[i] === '-') || (arr[i] === 'x') ){
        break;
      }else{
        numBeforeSubtraction = arr[i] + numBeforeSubtraction;
        numBeforeSubtractionIndex = i;
      }
    }
    for(let i=subtractionIndex+1;i<arr.length;i++){
      if((arr[i] === '÷') || (arr[i] === '+') || (arr[i] === '-') || (arr[i] === 'x')){
        break;
      }else{
        numAfterSubtraction = numAfterSubtraction + arr[i];
        numAfterSubtractionIndex = i;
      }
    }
    let result = Number(numBeforeSubtraction) - Number(numAfterSubtraction);
    result = String(result);
    difference = (numAfterSubtractionIndex - numBeforeSubtractionIndex) + 1; 
    //to remove element before and after division operator
    arr.splice(numBeforeSubtractionIndex,difference);
    // to add the result
    arr.splice(numBeforeSubtractionIndex,0,result);
    subtractionIndex = arr.indexOf('-');
    if(subtractionIndex === -1){
      return arr;
    }
  }
}

const clear = function(){
  displayInputElement.innerText = '';
  displayOutputElement.innerText = '';
}

// math calculation happens
const calculate = function(){
  let valueStr = displayInputElement.innerText;
  if(valueStr !== ""){
    valueArray = valueStr.split("");
    let firstValue = valueArray[0];
    let finalValue = valueArray[valueArray.length-1];
    if(firstValue === '-' || firstValue ==='+'){
      valueArray.unshift('0');
    }
    // to check first value and final value 
    if(firstValue !== 'x' && firstValue !== '÷' && finalValue !== '+' && finalValue !== '-' && finalValue !== 'x' && finalValue !== '÷'){
      valueArray = valueArray.includes("÷") ? checkDivision(valueArray) : valueArray;
      valueArray = valueArray.includes("x") ? checkMultiplication(valueArray) : valueArray;
      valueArray = valueArray.includes("-") ? checkSubtraction(valueArray) : valueArray;
      valueArray = valueArray.includes("+") ? checkAddition(valueArray) : valueArray;
      valueArray = valueArray.join('');
      displayOutputElement.innerText = valueArray;
    }
  }
  
}

// eventlistener
for(let i=0;i<inputElement.length;i++){
  if(inputElement[i].value === 'C'){
    inputElement[i].addEventListener('click',clear);
  }else if(inputElement[i].value === '='){
    inputElement[i].addEventListener('click',calculate);
  }else{
    inputElement[i].addEventListener('click',()=>{
      displayInputElement.innerText = displayInputElement.innerText + inputElement[i].value;
    })
  }
  
}
