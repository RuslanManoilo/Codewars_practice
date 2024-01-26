const elements = {
    managementBoard: document.querySelectorAll('.board__card-img'),
};

// console.log(elements.managementBoard.picture);

elements.managementBoard.forEach((elem, idx) => {
    console.dir(elem);
    
    elem.style.position = 'absolute';
    elem.style.width = `150px`
    elem.style.height = `95px`
    elem.style.left = `${150 * idx}px`;
    elem.style.top = `${150 * idx}px`;
});