let button = document.querySelector("button");

function clickButton(e) {
  setTimeout(() => {
    alert("¡Hola!")
  }, 3000)
}

button.addEventListener("click", clickButton);




//  const button = document.getElementById("show-alert");
//  
//  button.addEventListener("click", () => {
//    setTimeout(() => {
//      alert("¡Hola!");
//    }, 3000); 
//  });