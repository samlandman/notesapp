// note-tests.js

(function(exports) {
    function testNoteTitleIsStored() {
      var note = new Note("tesfdsfdsfdst note");
  
      if (note.title !== "test note") {
        throw new Error("Bad bad note");
      }
    };
  
    testNoteTitleIsStored();
  })(this);