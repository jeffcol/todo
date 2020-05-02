let box = document.querySelector('#text');


let add = document.querySelector('#add');

let full_list = document.querySelector('#full_list');

function adding(e) {

    let input = box.value;
    let text = document.createTextNode(input);

    let new_li = document.createElement("li");
    let form = document.createElement("div");
    form.setAttribute("class", "form-check");

    let label1 = document.createElement("label");
    label1.setAttribute("class", "form-check-label")

    new_li.appendChild(form);
    form.appendChild(label1);
    label1.appendChild(text);

    full_list.appendChild(new_li);

    alert(label1.value)
}


add.addEventListener('click', adding);