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
    document.getElementById('msg').innerHTML = document.getElementById("name").value;

        if (document.forms['main'].name.value===""){
        alert('Please enter a message!');
        return false;
    }
    return true;

}