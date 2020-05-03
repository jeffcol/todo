let box = document.querySelector("#text");

let add = document.querySelector("#add");

let full_list = document.querySelector("#full_list");

function addli(e) {
  let input = box.value;

  //creating elements and atributes
  let text = document.createTextNode(input);

  let close = document.createElement("i");
  close.setAttribute("class", "remove mdi mdi-close-circle-outline");

  let new_li = document.createElement("li");
  new_li.setAttribute("class", "getrid");

  let form = document.createElement("div");
  form.setAttribute("class", "form-check");

  let checkbox = document.createElement("input");
  checkbox.setAttribute("class", "checkbox");
  checkbox.setAttribute("type", "checkbox");

  let label1 = document.createElement("label");
  label1.setAttribute("class", "form-check-label");

  helper = document.createElement("i");
  helper.setAttribute("class", "input-helper");

  //Adding them

  new_li.appendChild(form);
  new_li.appendChild(close);

  label1.appendChild(checkbox);
  label1.appendChild(helper);
  form.appendChild(label1);

  label1.appendChild(text);

  full_list.appendChild(new_li);

  box.value = "";
  removeli();
  complete();
}

function adding(e) {
  addli();

}

function enter(e) {
  if (e.keyCode == "13") {
    addli();

  }
}

//input
add.addEventListener("click", adding);

document.addEventListener("keypress", enter);

//remove



function removeli () {
  let close = document.querySelectorAll(".remove");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.parentElement.removeChild(this.parentElement);
  };
}
}

function complete () {
  let check = document.querySelectorAll(".checkbox");
let i;
for (i = 0; i < check.length; i++) {
  check[i].onclick = function () {

    let div = this.parentElement.parentElement.parentElement;
    let divtext = this.parentElement;

    divtext.classList.toggle("completed");

  }
  

}
}



removeli();
complete();