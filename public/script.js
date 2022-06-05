//Kanban Board Javascript
//Inspired by examples provided by tutors on DECO2017 Slack

document.getElementById("colAdd").addEventListener("click", addColumn);

function addColumn() {
    console.log('Button Pressed');
    var newColumn = document.createElement('div');
    var newTitle = document.createElement('textarea');
    var newTitleContent = document.createTextNode('New Column', id = 'column');
    var addTileButton = document.createElement('button', id = 'add-tile-button');
    var addTileButtonText = document.createTextNode('Add New Tile');
    
    newColumn.className = 'kanban-column';
    newTitle.className = "kanban-title";
    addTileButton.className = "add-tile-button";

    


    var kanbanCol = document.getElementById("kanban-column-wrapper");

    kanbanCol.appendChild(newColumn);
    newColumn.appendChild(newTitle);
    newTitle.appendChild(newTitleContent);
    newColumn.appendChild(addTileButton);
    addTileButton.appendChild(addTileButtonText);
    
}

document.getElementById("add-tile-button").addEventListener("click", addTile);


function addTile() {
    var newTile = document.createElement('div');
    var newTileTitle = document.createElement('textarea');
    var newTileContent = document.createElement('textarea');


    var column = document.getElementById("column");

    column.appendChild(newTile);
    newTile.appendChild(newTileTitle);
    newTile.appendChild(newTileContent);
}

/////////////////////////////////
//Reading list javascript
/////////////////////////////////

//Reading List submit button bound to readButton variable
let readButton = document.getElementById("readsubmit");

renderitems();

readButton.addEventListener("click", function(){

    let title = document.getElementById("title").value;
    let link = document.getElementById("link").value;

    let readObject = {
        'title': title,
        'link': link
    }

    let existingItems = getItems();

    existingItems.push(readObject);

    existingItems = JSON.stringify(existingItems);

    localStorage.setItem('items', existingItems);

    renderitems();
})

function getItems() {
    let items = localStorage.getItem('items');

    if (items == null) {
        return [];
    }    

    items = JSON.parse(items);

    return items;
}

function renderItems() {
    let items = getItems();

    let itemUL = document.getElementById('readlist');

    itemUL.innerHTML = "";

    items.forEach(function(item){
        let itemLI = document.createElement('li');

        let itemName = document.createElement('span');
        itemName.setAttribute('class', 'itemname');

        let itemRemove = document.createElement('button');
        itemRemove.setAttribute('class', 'remove');
        itemRemove.innerText = 'x';

        itemRemove.addEventListener("click", function(){
            itemLI.remove();

            removeItem(item.itemName);
        })

        itemLI.appendChild(itemName);
        itemLI.appendChild(itemRemove);

        itemUL.appendChild(itemLI);
    }
    )
}






/////////////////////////////
//Timer Javascript
////////////////////////////////
var time = document.querySelector('.stopwatch .time');
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var start = document.getElementById("start");

let seconds = 1000;
let interval = null;



function timer() {
    seconds++;

    let secs = seconds % 60;
    let mins = Math.floor(seconds/60);
    let hours = Math.floor(seconds/3600);

    time.innerText = `${hours}:${mins}:${secs}`;

}


