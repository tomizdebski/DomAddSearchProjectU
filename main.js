const addElement = (e, node, txt, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node);
    
    if(txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if(attr) {
       element.setAttribute(attr, value);  
    }
    
    document.querySelector('.content').appendChild(element);
}

const searchElements = (e, nameElement) => {
    e.preventDefault();
    const infoElement = document.querySelector('.result');
    const elements = document.querySelectorAll(nameElement);
    console.log(elements);
    if(elements.length) {
        infoElement.innerHTML = `<p class="result__info">W tym dokumencie znalazłem ${elements.length} elementów ${nameElement}</p>`
        showInfo(elements, infoElement);
    } else {
        infoElement.innerHTML = `<p class="result__info">W tym dokumencie nie znalazłem elementów ${nameElement}</p>`
    }

}

const showInfo = (elements, infoElement) => {
    console.log(elements, infoElement);
}

// listeners
const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,
));

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value));