'use strict';

let noteApp = new NoteApp();

(function(exports) {
    
    function testNoteTitleIsStored() {
      // var noteApp = new NoteApp(); //This is creating the note
      noteApp.note("test note")
      // debugger;
      expect.toEqual("test note title is stored", noteApp.noteArray.includes("test note"), true); //This is the expect line
    };

      function testNoteArrayStartsEmpty() {
        // var noteApp = new NoteApp();
        expect.toEqual("test note starts with an empty array of notes", noteApp.noteArray.length, 0);
      }

      function addingANoteWithBlankTextReturnsAnError() {
        expect.toRaiseError('Adding a note with blank text returns an error', 'noteApp.note("")','Please insert your message');
      }


      testNoteArrayStartsEmpty();
      testNoteTitleIsStored(); //This is running the test
      addingANoteWithBlankTextReturnsAnError();
  })(this); //This gives us back the responses

  // (function(exports) {
  // })(this);
