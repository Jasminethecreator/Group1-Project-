function toggleDarkMode() {
  console.log ("Enter Function");
  var background = document.getElementById ("bg");
  console.log(background.style.background);
  if(background.style.background === "peachpuff"){
      console.log ("Enter If");
      background.style.background = "black"
  } else {
      console.log ("Enter Else");
      background.style.background = "peachpuff"
}
}
