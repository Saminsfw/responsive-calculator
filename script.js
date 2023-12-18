let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let result = input.value;
let buttonArray = Array.from(buttons);
buttonArray.forEach((button) => {
  button.addEventListener("click", (clickedButton) => {
    if (clickedButton.target.innerHTML == "=") {
      result = eval(result);
      input.value = result;
    } else if (clickedButton.target.innerHTML == "AC") {
      result = "";
      input.value = result;
    } else if (clickedButton.target.innerHTML == "DEL") {
      result = result.substring(0, result.length - 1);
      input.value = result;
    } else {
      result += clickedButton.target.innerHTML;
      input.value = result;
    }
  });
});
