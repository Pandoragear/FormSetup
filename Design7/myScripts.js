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

function createCloseButton(p) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = () => (span.parentElement.style.display = "none");
}

document.querySelectorAll("p").forEach(createCloseButton);

document.querySelector("p").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") e.target.classList.toggle("checked");
});

function add() {
  let li = document.createElement("p");
  let input_value = document.main.name.value;
  let input_text = document.createTextNode(input_value);
  
  document.main.reset();
  

  li.appendChild(input_text);
  document.querySelector("p").appendChild(li);
  document.main.task.value = "";

  createCloseButton(li);
}


// This function create an alert to show if value = Null 
function add() {
    if (document.forms['main'].name.value===""){
        alert('empty');
        return false;
    }
    return true;
}