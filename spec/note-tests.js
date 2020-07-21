'use strict';

(function(exports) {
    function testNoteTitleIsStored() {
      var note = new Note("test note"); //This is creating the note
      expect.toEqual("test note title is stored", note.title, "test note"); //This is the expect line
    };
  
    testNoteTitleIsStored(); //This is running the test
  })(this); //This gives us back the responses

  (function(exports) {
    function testNoteArrayStartsEmpty() {
      expect.toEqual("test note starts with an empty array of notes", Note.noteArray.length, 0);
    }

    testNoteArrayStartsEmpty();
  })(this);