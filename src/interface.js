let noteApp;
window.addEventListener('DOMContentLoaded', (event) => {
    noteApp = new NoteApp();
    theRandomisor();
});

function theRandomisor(){
    var colourArray = ["#fa26a0", "#05dfd7", "#a3f7bf", "#fff591"];
    document.body.style.backgroundColor = colourArray[Math.floor(Math.random() * colourArray.length)];
}
  
  
  var btn = document.getElementById("albieButton");
  btn.addEventListener("click", createNote);

  function createNote() {
    noteApp.create(document.getElementById("albieText").value);
    document.getElementById("albieText").value = "";
    create20list();
    createFullList();
    theRandomisor();
  };

  function create20list() {
    var albieList = document.getElementById("albieList");
    var li = document.createElement("a");
    var br = document.createElement("br");
    li.setAttribute('id',(noteApp.note20.length -1));
    li.setAttribute('class', 'albie20List');
    li.setAttribute('href',('#note'+(noteApp.note20.length -1)));
    li.appendChild(document.createTextNode(noteApp.note20[noteApp.note20.length -1]));
    albieList.appendChild(li);
    albieList.appendChild(br);  
  };

  function createFullList() {
    var albieFullList = document.getElementById("albieFullList");
    var list = document.createElement("p");
    list.setAttribute('class', 'albieFullList');
    list.setAttribute('id', ("note"+(noteApp.note20.length -1)));
    list.appendChild(document.createTextNode(noteApp.noteArray[noteApp.noteArray.length -1]));
    albieFullList.appendChild(list);
  };
