let noteApp;
window.addEventListener('DOMContentLoaded', (event) => {
    noteApp = new NoteApp();
    theRandomisor();
});

function theRandomisor(){
  var colourArray = ["#fa26a0", "#05dfd7", "#a3f7bf", "#fff591", "#F6DEF6"];
  var brightColourArray = ["#05D95F", "#FA2028", "#5C0840", "#000A6E", "#092109"];
  var col = Math.floor(Math.random() * colourArray.length)
  let albieButton = document.getElementById("albieButton");
    document.body.style.backgroundColor = colourArray[col];
    albieButton.style.color = brightColourArray[col];
    albieButton.addEventListener("mouseover", function(event) {
      event.target.style.background = brightColourArray[col];
      event.target.style.color = colourArray[col];
      // event.target.style.boxShadow = '0 0 10px, ${brightColourArray[col]}';
    })
    albieButton.addEventListener("mouseleave", function(event) {
      event.target.style.background = colourArray[col];
      event.target.style.color = brightColourArray[col];
    })

    document.getElementById("albieTitle").style.color = brightColourArray[col];

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
