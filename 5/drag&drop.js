var dropAndDragFUnction = function () {
    const draggables = document.querySelectorAll(".draggable");
    const dropTargets = document.querySelectorAll(".drop-target");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", handleDragStart);
    });

    dropTargets.forEach(dropTarget => {
        dropTarget.addEventListener("dragover", handleDragOver);
        dropTarget.addEventListener("dragenter", handleDragEnter);
        dropTarget.addEventListener("dragleave", handleDragLeave);
        dropTarget.addEventListener("drop", handleDrop);
    });

    function handleDragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.dataset.value);
        console.log("drag strart");
    }

    function handleDragOver(event) {
        event.preventDefault();
        console.log("drag over");
    }

    function handleDragEnter(event) {
        event.target.classList.add("drag-over");
        console.log("handle Drag Enter")
    }

    function handleDragLeave(event) {
        event.target.classList.remove("drag-over");
        console.log("handle drag leave");
    }

    function handleDrop(event) {
        event.preventDefault();
        const draggedValue = event.dataTransfer.getData("text/plain");
        event.target.classList.remove("drag-over");
        console.log("handle drop");

        console.log(event.target.dataset.target)
        console.log(draggedValue)
        event.target.innerText = draggedValue;
        event.target.classList.add("correct");
    }
}
