//Kanban Board Javascript
//Inspired by examples provided by tutors on DECO2017 Slack

document.getElementById("colAdd").addEventListener("click", addColumn);

function addColumn() {
    console.log('Button Pressed');
    var newColumn = document.createElement('div');
    newColumn.className = 'kanban-column';

    var kanbanCol = document.getElementById("kanban-column-wrapper");

    kanbanCol.appendChild(newColumn);
}

//Timer Javascript

