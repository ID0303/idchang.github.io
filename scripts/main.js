
var myHeading = document.querySelector("h1");
myHeading.onclick = function()
{
    alert("h1 is been Clicked!");
}

var origin = localStorage.getItem("name");
if (!origin || origin === null) 
{
  setUserName();
} 
else 
{
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

var myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") 
    {
        myImage.setAttribute("src", "images/test.jpg");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

var myBtn = document.querySelector("button");
myBtn.onclick = setUserName;

// function
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

function setUserName() {
  let myName = prompt("Please enter your name.");
  if((!myName || myName === null))
  {
    setUserName();
  }
  else
  {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
  }
}