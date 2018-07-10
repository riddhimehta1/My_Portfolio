var mybio = document.getElementById("bio");
function changeColor(){
  mybio.style.color = "purple";
}

function changeBack(){
  mybio.style.color = "green";
}
mybio.onmouseover = changeColor;
mybio.onmouseout = changeBack;
console.log("mybio", mybio);

var mylink = document.getElementById("link");
function changeLinkColor(){
  mylink.style.color = "orange";
}

function changeLinkBack(){
  mylink.style.color = "purple";
}
mylink.onmouseover = changeLinkColor;
mylink.onmouseout = changeLinkBack;






// // var x = document.getElementById("idName")
//
//
//
// //take in a number
// //multiply it by 25
//
// function multiplyByTwentyFive(number) {
//   console.log("Hello, I work!")
//   return number * 25;
// }
//
// function foodName(food_name) {
//   console.log("I love " + food_name);
// }
