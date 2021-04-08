var calcButton;
var calcInput;
var calcOutput;
var fortuneButton;
var fortuneInput;
var fortuneOutput;
var fortunes = ["anxiety won't help your problems.",
                "it may be difficult, but it will be worth it in the end.",
                "the best way to predict the future is to create it.",
                "focus on your health and well-being now. It won't wait.",
                "get ready for a life-changing event!",
                "learn how to do something new today.",
                "your smile lights up someone else's day.",
                "somebody appreciates the unique you.",
                "be thankful, even if your life is not perfect.",
                "free your mind, and the rest will follow."];
var size = ["14px", "18px", "20px", "22px", "24px", "26px", "28px", "30px", "32px", "34px", "36px"];
var transform = ["unset", "uppercase", "lowercase", "capitalize"];
var textColor = ["#025940", "#3b5a9d", "#f7ba4d", "#2482a4","#229a90", "#9C5749", "#3F748F", "#5D524F", "#B57558", "#645085", "#738670", "#7BA385"];
var weight = ["500", "600", "700", "800"];


window.addEventListener('DOMContentLoaded', function() {
  calcButton = document.getElementById("half-button");
  calcInput = document.getElementById("half-input");
  calcOutput = document.getElementById("half-output");
  fortuneButton = document.getElementById("fortune-button");
  fortuneInput = document.getElementById("fortune-input");
  fortuneOutput = document.getElementById("fortune-output");


  calcButton.addEventListener("click", halfNumber);

  fortuneButton.addEventListener("click", fortune);
  fortuneButton.addEventListener("click", restyle);
});


function halfNumber() {
  var numberInput = calcInput.value;
  console.log(numberInput);

  var numberOutput = numberInput/2;
  console.log(numberOutput);

  if (numberInput) {
    alert("Half of " + numberInput + " is " + numberOutput + ".");
  } else {
    alert("Please enter a number.");
  }
}

function fortune() {
  // console.log("working");

  var name = fortuneInput.value;
  // console.log(name);

  var randonNumber = Math.floor(Math.random() * fortunes.length);
  var selectedFortune = fortunes[randonNumber];

  // console.log(selectedFortune);

  if (name) {
    fortuneOutput.innerText = name + ", " + selectedFortune;
  } else {
    fortuneOutput.innerText = "Hey Anonymous, " + selectedFortune;
  }

}

function restyle() {
  fortuneOutput.style.color = textColor[Math.floor(Math.random() * textColor.length)];
  // console.log(textColor[Math.floor(Math.random() * textColor.length)]);
  fortuneOutput.style.fontSize = size[Math.floor(Math.random() * size.length)];
  // console.log(size[Math.floor(Math.random() * size.length)]);
  fortuneOutput.style.textTransform = transform[Math.floor(Math.random() * transform.length)];
  // console.log(transform[Math.floor(Math.random() * transform.length)]);
  fortuneOutput.style.fontWeight = weight[Math.floor(Math.random() * weight.length)];
  // console.log(weight[Math.floor(Math.random() * weight.length)]);

}
