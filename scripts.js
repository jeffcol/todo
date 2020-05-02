let box = document.querySelector('#text');


let add = document.querySelector('#add');

let full_list = document.querySelector('#full_list');

function adding(e) {

    let input = box.value;
    let text = document.createTextNode(input);

    let close = document.createElement("i");
    close.setAttribute("class", "remove mdi mdi-close-circle-outline");

    let new_li = document.createElement("li");
    let form = document.createElement("div");
    form.setAttribute("class", "form-check");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("class", "checkbox");
    checkbox.setAttribute("type", "checkbox");

    let label1 = document.createElement("label");
    label1.setAttribute("class", "form-check-label");

    helper = document.createElement("i");
    helper.setAttribute("class", "input-helper");

    new_li.appendChild(form);
    new_li.appendChild(close);

    label1.appendChild(checkbox);
    label1.appendChild(helper);
    form.appendChild(label1);


    label1.appendChild(text);

    full_list.appendChild(new_li);

    alert(label1.value);
}


add.addEventListener('click', adding);