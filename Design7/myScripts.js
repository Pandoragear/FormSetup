// This script manually  add text value
// document.getElementById("btn").addEventListener("click", function() {
//     document.getElementById("msg").innerHTML = "hello world";
// });


function showInput() {
  // This create a condition if value is empty then show alert
  if (document.forms["main"].name.value === "") {
    alert("Please enter some text!!");

    // This place the cursor back into the text field after alert
    document.getElementById("name").focus();
  }

  // This add message from text field onto the bottom line
  document.getElementById("msg").innerHTML = document.getElementById(
    "name"
  ).value;

  // This clear the text field
  document.getElementById("name").value = "";

  // placing the cursor back to the text field after submit
  document.getElementById("name").focus();
}

