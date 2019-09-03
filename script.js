// Shopping List 2
var button = document.getElementById("btn-shop");
var input = document.getElementById("user-input");
var ul = document.getElementById("list");




function createListElement() {
 if (input.value.length > 0) {
  var li = document.createElement("li");
  var delButton = document.createElement("button")

  li.appendChild(document.createTextNode(input.value));
  delButton.appendChild(document.createTextNode("Delete"));

  ul.appendChild(li) + " " + li.appendChild(delButton);
  input.value = "";

  //delete
  delButton.addEventListener("click", function () {
   li.remove();
  })
 }
}

button.addEventListener("click", function () {
 if (input.value.length > 0) {
  createListElement();
 }
})

input.addEventListener("keypress", function () {
 if (input.value.length > 0 && event.which === 13) {
  createListElement();
 }
})

ul.onclick = function (event) {
 var target = event.target;
 target.classList.toggle("done");
}