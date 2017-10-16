function bereken(input){
  var beoordeling;
  if (input >= 0 && input <= 49) {
    beoordeling = " onvoldoende";
  } else if (input <= 59) {
    beoordeling = " matig";
  } else if (input <= 74) {
    beoordeling = " voldoende";
  } else if (input <= 100) {
    beoordeling = " goed";
  }
  return beoordeling;
}
function cijfer(){
  var input = document.getElementById('input').value;
    document.getElementById('resultaat').innerHTML += "Het cijfer is "+ input +" en is dus" + bereken(input) + "<br>";
}
function cijfer1(){
  var input = document.getElementById('input1').value;
    document.getElementById('resultaat').innerHTML += 'de beoordeling is' + bereken(input) + ' , want het cijfer is: ' + input + "<br>";
}
