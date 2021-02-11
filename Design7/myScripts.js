// This script manually  add text value
// document.getElementById("btn").addEventListener("click", function() {
//     document.getElementById("msg").innerHTML = "hello world";
// });

// function myFunction (){
//     var x = document.getElementById("myText").value;
//     document.getElementById("btn").addEventListener("click", function() {
//     document.getElementById("msg").innerHTML = "hello world";
//     });
// }

function showInput() {

  if (document.forms["main"].name.value === "") {
    alert("Please enter some text!!");
  }

  document.getElementById("msg").innerHTML = document.getElementById(
    "name"
  ).value;

  document.getElementById("name").value = "";

}
