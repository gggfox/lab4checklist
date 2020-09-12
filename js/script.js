let cleartodos = document.getElementsByClassName("clearButton");
let marktodos  = document.getElementsByClassName("markAllButton");
let alltodos   = document.getElementsByClassName("check");
let deltodos   = document.getElementsByClassName("deleteButton");
let txtarea    = document.getElementsByClassName("newTodo");
let todolst    = document.getElementsByClassName("panel-body");
let submit     = document.getElementsByClassName("submitButton");

submit[0].addEventListener("click", (event) => {
  event.preventDefault();
  let todo  = txtarea[0].value.trim();
  let input = `<p><input type="checkbox" class="check">${todo}</p>`
  txtarea[0].value = "";
  todolst[1].innerHTML += todo ? input : null;
});

cleartodos[0].addEventListener("click", (event) => {
  event.preventDefault();
  Array.from(alltodos, (todo) => todo.checked = false);
});

marktodos[0].addEventListener("click", (event) => {
  event.preventDefault();
  Array.from(alltodos, (todo) => todo.checked = true);
});

deltodos[0].addEventListener("click", (event) => {
  event.preventDefault();
  todolst[1].innerHTML = "";
});
