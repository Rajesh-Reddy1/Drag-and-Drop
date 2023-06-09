function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.classList.add('dragged');

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedItem = document.getElementById(data);
    ev.target.appendChild(draggedItem);
    draggedItem.classList.add('dragged');
    document.getElementById('successMessage').innerHTML = "Item dropped successfully";
    if (ev.target.id === 'container1') {
        draggedItem.classList.remove('dragged');
    }
}


function reset() {
    var container1 = document.getElementById('container1');
    var container2 = document.getElementById('container2');
    while (container2.firstChild) {
        container1.appendChild(container2.firstChild);
        container2.firstChild.classList.remove('dragged');
    }
    document.getElementById('successMessage').innerHTML = "";
}