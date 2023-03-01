function getElementValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getAriaValueById(areaFieldId, calculateValue){
    const areaField = document.getElementById(areaFieldId);
    areaField.value = calculateValue;
    const areaFieldValueString = areaField.value;
    const areaFieldValue = parseFloat(areaFieldValueString);
    return areaFieldValue;
}
function getDisplay(listId, shapeValue, shapeCalculation){
    const list = document.getElementById(listId);
    if(shapeValue == shapeCalculation){
        list.style.display = 'block';
        list.style.display = 'flex';
    }
    else{
        list.style.display='none';
    }
}
function validateForm(inputId1,inputId2) {
  let x = document.getElementById(inputId1).value;
  let y = document.getElementById(inputId2).value;
  if (x == "" || x<=0 || y== "" || y<=0) {
    alert("Input Field must be filled out with positive number");
    const list = document.getElementById(listId);
    if(shapeValue == shapeCalculation){
        list.style.display = 'none';
    }
  }
  return false;
}
document.getElementById('btn-triangle').addEventListener('click', function(){
    validateForm('triangle-b', 'triangle-h','triangle-value');
    const triangleNumberB = getElementValueById('triangle-b');
    const triangleNumberH = getElementValueById('triangle-h');
   const triangleCalculate = (0.5*triangleNumberB*triangleNumberH).toFixed(2);
   const triangleValue = getAriaValueById('triangle-value', triangleCalculate);
    getDisplay('list-1', triangleValue, triangleCalculate);
    
})
document.getElementById('btn-rectangle').addEventListener('click', function(){
    validateForm('rectangle-w', 'rectangle-l');
    const rectangleNumberW = getElementValueById('rectangle-w');
    const rectangleNumberL = getElementValueById('rectangle-l');
    const rectangleCalculate = (rectangleNumberW*rectangleNumberL).toFixed(2);
    const rectangleValue = getAriaValueById('rectangle-value', rectangleCalculate);
    getDisplay('list-2', rectangleValue, rectangleCalculate);

})
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    validateForm('parallelogram-b', 'parallelogram-h');
    const parallelogramNumberB = getElementValueById('parallelogram-b');
    const parallelogramNumberH = getElementValueById('parallelogram-h');
    const parallelogramCalculate = (parallelogramNumberB*parallelogramNumberH).toFixed(2);
    const parallelogramValue = getAriaValueById('parallelogram-value',parallelogramCalculate);
    getDisplay('list-3', parallelogramValue, parallelogramCalculate);

})
document.getElementById('btn-rhombus').addEventListener('click', function(){
    validateForm('rhombus-d1', 'rhombus-d2');
    const rhombusNumberD1 = getElementValueById('rhombus-d1');
    const rhombusNumberD2 = getElementValueById('rhombus-d2');
    const rhombusCalculate = (0.5* rhombusNumberD1*rhombusNumberD2).toFixed(2);
    const rhombusValue = getAriaValueById('rhombus-value', rhombusCalculate);
    getDisplay('list-4', rhombusValue, rhombusCalculate);

})
document.getElementById('btn-pentagon').addEventListener('click', function(){
    validateForm('pentagon-p', 'pentagon-b');
    const pentagonNumberP = getElementValueById('pentagon-p');
    const pentagonNumberB = getElementValueById('pentagon-b');
    const pentagonCalculate = (0.5* pentagonNumberP*pentagonNumberB).toFixed(2);
    const pentagonValue = getAriaValueById('pentagon-value', pentagonCalculate);
    getDisplay('list-5', pentagonValue, pentagonCalculate);

})
document.getElementById('btn-ellipse').addEventListener('click', function(){
    validateForm('ellipse-a', 'ellipse-b');
    const ellipseNumberA = getElementValueById('ellipse-a');
    const ellipseNumberB = getElementValueById('ellipse-b');
    const ellipseCalculate = (3.14* ellipseNumberA*ellipseNumberB).toFixed(2);
    const ellipseValue = getAriaValueById('ellipse-value', ellipseCalculate);
    getDisplay('list-6', ellipseValue, ellipseCalculate);

})
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 
document.getElementById('card-1').addEventListener('mouseover', event => {
      const cards1 = document.getElementsByClassName('card1');
      for(let card1 of cards1){
        card1.style.backgroundColor = randomColor();
      }
    
});
document.getElementById('card-2').addEventListener('mouseover', event => {
      const cards2 = document.getElementsByClassName('card2');
      for(let card2 of cards2){
        card2.style.backgroundColor = randomColor();
      }
});
document.getElementById('card-3').addEventListener('mouseover', event => {
      const cards3 = document.getElementsByClassName('card3');
      for(let card3 of cards3){
        card3.style.backgroundColor = randomColor();
      }
});
document.getElementById('card-4').addEventListener('mouseover', event => {
      const cards4 = document.getElementsByClassName('card4');
      for(let card4 of cards4){
        card4.style.backgroundColor = randomColor();
      }
});
document.getElementById('card-5').addEventListener('mouseover', event => {
      const cards5 = document.getElementsByClassName('card5');
      for(let card5 of cards5){
        card5.style.backgroundColor = randomColor();
      }
});
document.getElementById('card-6').addEventListener('mouseover', event => {
      const cards6 = document.getElementsByClassName('card6');
      for(let card6 of cards6){
        card6.style.backgroundColor = randomColor();
      }
});