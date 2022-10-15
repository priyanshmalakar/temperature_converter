let celsius = document.getElementById("Celsius");
let farenheit = document.getElementById("Fahrenheit");


// TEMPERATURE CONVERTER

celsius.addEventListener("input", function () {
  let tempCelsius = this.value;
  if (tempCelsius) {
    let result = (tempCelsius * 9) / 5 + 32;
    farenheit.value = `${result}° F`;
  } else {
    farenheit.value = null;
  }
});

farenheit.addEventListener("input", function () {
  let tempFarenheit = this.value;
  if (tempFarenheit) {
    let result = ((tempFarenheit - 32) * 5) / 9;
    celsius.value = `${result}° C`;
  } else {
    celsius.value = null;
  }
});
