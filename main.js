let ekleButon = document.getElementById("eklebuton");
let temzileButon = document.getElementById("temizlebuton");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let geriButon = document.getElementById("geriButon");

inputText.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && inputText.value == "") {
    alert("Task not entered!");
  } else if (event.key === "Enter" && inputText.value != "") {
    ekle();
  }
});

function ekle() {
  toDoContainer.classList.add("toDoContainer1");
  let paragraf = document.createElement("p");
  let kaldırButon = document.createElement("button");
  kaldırButon.textContent = "Kaldır";
  paragraf.setAttribute("draggable", "true");
  toDoContainer.appendChild(paragraf);
  paragraf.innerHTML = inputText.value;
  inputText.value = "";
  paragraf.appendChild(kaldırButon);
  paragraf.classList.add("toDo");
  kaldırButon.classList.add("kaldır_btn");
  kaldırButon.addEventListener("click", function () {
    toDoContainer.removeChild(paragraf);
  });
  paragraf.addEventListener("click", function () {
    paragraf.classList.add("liste");

  });
  paragraf.addEventListener("dblclick", function () {
    paragraf.classList.remove("liste");
  });
  temzileButon.addEventListener("click", function () {
    paragraf.remove();
    toDoContainer.classList.remove("toDoContainer1");
  });

  paragraf.addEventListener("dragstart", function (event) {
    draggedElement = paragraf;
    event.dataTransfer.setData("text", paragraf.textContent);
    event.target.style.opacity = "0.5";
  });

  paragraf.addEventListener("dragend", function (event) {
    event.target.style.opacity = "1";
    draggedElement = null;
  });

  paragraf.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  paragraf.addEventListener("drop", function (event) {
    event.preventDefault();
    if (draggedElement && draggedElement !== paragraf) {
      toDoContainer.insertBefore(draggedElement, paragraf);
    }
  });
}


ekleButon.addEventListener("click", function (event) {
  if (inputText.value == "") {
    alert("Task not entered!");
  } else if (inputText.value != "") {
    ekle();
  }
});


