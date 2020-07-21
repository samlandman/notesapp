'use strict';

let noteApp = new NoteApp();

(function(exports) {
    
    function testNoteTitleIsStored() {
      noteApp.note("test note")
      expect.toEqual("test note title is stored", noteApp.noteArray.includes("test note"), true); //This is the expect line
    };

      function testNoteArrayStartsEmpty() {
        expect.toEqual("test note starts with an empty array of notes", noteApp.noteArray.length, 0);
      }

      function addingANoteWithBlankTextReturnsAnError() {
        expect.toRaiseError('Adding a note with blank text returns an error', 'noteApp.note("")','Please insert your message');
      }

      function Read20ReturnsFirst20Characters(){
        var noteAppAlbie = new NoteApp();
        noteAppAlbie.note("This is some long text")
        expect.toEqual('Read20 returns the length of max 20 characters',noteAppAlbie.note20[0].length, 20)
        expect.toEqual('Read20 returns the first 20 characters',noteAppAlbie.note20[0],'This is some long te')
      }


      testNoteArrayStartsEmpty();
      testNoteTitleIsStored(); //This is running the test
      addingANoteWithBlankTextReturnsAnError();
      Read20ReturnsFirst20Characters();
  })(this); //This gives us back the responses
