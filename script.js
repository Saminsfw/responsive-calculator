let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let result = input.value;
let buttonArray = Array.from(buttons);
buttonArray.forEach((button) => {
  button.addEventListener("click", (clickedButton) => {
    if (clickedButton.target.innerHTML == "=") {
      input.value = eval(input.value);
    } else if (clickedButton.target.innerHTML == "AC") {
      input.value = "";
    } else if (clickedButton.target.innerHTML == "DEL") {
      input.value = input.value.substring(0, input.value.length - 1);
    } else {
      input.value += clickedButton.target.innerHTML;
    }
  });
});
