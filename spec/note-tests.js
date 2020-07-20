'use strict';

(function(exports) {
    function testNoteTitleIsStored() {
      var note = new Note("test note"); //This is creating the note
      expect.toEqual(note.title, "test note"); //This is the expect line
    };
  
    testNoteTitleIsStored(); //This is running the test
  })(this); //This gives us back the responses