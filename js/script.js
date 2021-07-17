const inputTask = document.querySelector('input[type="text"]');
const ulSpisok = document.getElementById("list");
const spans = document.getElementsByTagName("span");
const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");
const lish = document.getElementsByTagName("li");
const text = document.querySelectorAll("element.textContent");
let saveDate = "";

// const dd = getDate();
// const mm = getMonth();
// const yyyy = today.getFullYear();
const btnInfo = document.getElementById("infomen");

function deleteTodo() {
  for (const span of spans) {
    span.addEventListener("click", function () {
      span.parentElement.remove();
      event.preventDefault();
    });
  }
}
function loadTodo() {
  if (localStorage.getItem("todoApplication")) {
    ulSpisok.innerHTML = localStorage.getItem("todoApplication");
    deleteTodo();
  }
}

// при отсуттвии задачи, чтобы пустое полен не добавляосьв список задач

inputTask.addEventListener("keypress", function tasks(keyPressed) {
  if (this.value !== "") {
    if (keyPressed.which === 13) {
      const newLi = document.createElement("li");
      const newSpan = document.createElement("span");
      const spanValue = document.createElement("span");
      const saveDate = document.createElement("div");

      newLi.style.textDecoration = "none";
      newLi.style.color = "black";
      newSpan.innerHTML = "DELETE  ";
      saveDate.innerHTML = new Date();
      spanValue.textContent = this.value;
      this.value = "";

      newLi.addEventListener("click", function () {
        if (spanValue.style.textDecoration === "none") {
          // newLi.style.textDecoration = "line-through ";
          spanValue.style.textDecoration = "line-through ";
          saveDate.style.color = "blue";
          newSpan.style.color = "red";
          newLi.style.color = "orange";
          newSpan.style.textDecoration = "underline";
        } else {
          spanValue.style.textDecoration = "none";
          spanValue.style.color = "black";
          saveDate.style.color = "black";
        }
      });

      ulSpisok.appendChild(newLi).append(newSpan, spanValue, saveDate);
      deleteTodo();
    }
  }
});
saveBtn.addEventListener("click", function () {
  localStorage.setItem("todoApplication", ulSpisok.innerHTML);
});
clearBtn.addEventListener("click", function () {
  ulSpisok.innerHTML = "";
  localStorage.setItem("todoApplication", ulSpisok.innerHTML);
});

btnInfo.addEventListener("click", function () {
  alert(" разработчик:Ананич Александр Николаевич");
});
deleteTodo();
loadTodo();
