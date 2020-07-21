'use strict';

(function(exports) {
    function testNoteTitleIsStored() {
      var noteApp = new NoteApp(); //This is creating the note
      noteApp.note("test note")
      // debugger;
      expect.toEqual("test note title is stored", noteApp.noteArray.includes("test note"), true); //This is the expect line
    };

  testNoteTitleIsStored(); //This is running the test
  })(this); //This gives us back the responses

  //
  // (function(exports) {
  //   function testNoteArrayStartsEmpty() {
  //     expect.toEqual("test note starts with an empty array of notes", Note.noteArray.length, 0);
  //   }
  //
  //   testNoteArrayStartsEmpty();
  // })(this);
