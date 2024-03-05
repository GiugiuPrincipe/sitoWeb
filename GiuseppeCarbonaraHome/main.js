var sliderCounter = 0;
var sliderContent = [
  " Giuseppe Carbonara"
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");
var sliderValue2 = document.querySelector('#sliderValue2');

function slide() {
  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = "";
  sliderValue2.innerHTML = ""; // Aggiungi questa linea per svuotare il secondo div


  sliderValue.classList.remove("holder-animation");
  sliderValue.classList.add("holder-animation");

  for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("span");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == " ") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
  }

  // Aggiungi il punto nel secondo div dopo la creazione della prima scritta
  let dotDiv = document.createElement("span");
  dotDiv.innerHTML = ".";
  dotDiv.classList.add("start");
  dotDiv.classList.add("animation");
  dotDiv.style.animationDelay = i / 9.5 + "s"; 
  sliderValue2.appendChild(dotDiv);

  sliderCounter++;
}

slide();
setInterval(slide, 4000);