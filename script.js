var add = document.getElementById("addElem");
var myList = document.getElementById("list");

add.addEventListener("click", function() {
  var element = document.createElement("li");
  var elementCount = document.getElementsByTagName("li");
  element.innerText = "item" + elementCount.length;
  list.appendChild(element);
});
