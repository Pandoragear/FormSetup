// This script manually  add text value
// document.getElementById("btn").addEventListener("click", function() {
//     document.getElementById("msg").innerHTML = "hello world";
// });

function myFunction (){
    var x = document.getElementById("myText").value;
    document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("msg").innerHTML = "hello world";
    });
}

