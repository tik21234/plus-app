let firstInput = document.getElementById("first-input");
let secondInput = document.getElementById("second-input");
let button = document.querySelector('button');
let output = document.querySelector('h1');
button.addEventListener('click',() => {
  let num1 = +firstInput.value;
  let num2 = +secondInput.value;
  if (isNaN(num1) || isNaN(num2)) {
   return alert("Please enter valid numbers.");
}
  let sum = num1 + num2;
  let Sum = document.createElement('p');
  Sum.innerText = "Sum: " + sum;
  output.appendChild(Sum);
});


