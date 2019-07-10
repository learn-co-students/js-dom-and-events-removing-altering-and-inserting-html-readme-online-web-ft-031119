let element = document.createElement('div');
let ul = document.createElement('ul')

element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';
element.style.textAlign = 'left'



for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul)

document.body.appendChild(element)