// Change heading
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// Change image
var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/Mozilla_Firefox.png') {
    myImage.setAttribute ('src', 'images/mozilla-logo.png') ;
  } else {
    myImage.setAttribute ('src', 'images/Mozilla_Firefox.png');
  }
}

// Change user
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
