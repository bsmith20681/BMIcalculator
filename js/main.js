function calculateTDEE() {
  let activityLevel = document.getElementById("activityLevel").value;
  let age = document.getElementById("age").value;
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let gender = document.getElementById("gender").value;

//Alert if no numbers are entered
  if ( age === '' || weight === '') {
    alert("Please enter values");
    return;
  }



//10 x weight (kg) + 6.25 x height (cm) - 5 x age (y) + 5
  let total = (10 * (parseFloat(weight)*.453592)) + (6.25 * parseFloat(height)) - (5 * parseFloat(age));
//this line calculates your BMR by our activity level to figure out your tdee
  let tdee = (total + parseFloat(gender)) * parseFloat(activityLevel);

  tdee = tdee.toFixed(0);

  document.getElementById("output").innerHTML = ("Your Total Daily Energy Expenditure is " + tdee)
  document.getElementById("weightGain").innerHTML = ("In order to gain weight you need to eat " + (+tdee + 500))
  document.getElementById("weightLose").innerHTML = ("In order to lose weight you need to eat " + (tdee - 500))

}


document.getElementById("calculate").onclick = function(){
  calculateTDEE();
};
