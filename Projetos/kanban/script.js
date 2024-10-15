let tasks = document.querySelectorAll(".task");
let kanban = document.querySelectorAll(".kaban");


tasks.forEach((task) => {
    console.log(task.draggable = true);  
})

kanban.forEach((card) => {
    card.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    card.addEventListener("drop", () => {
        card.appendChild(tasks)
    })
})