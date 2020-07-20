// note-tests.js

'use strict';

(function(exports) {
    function testNoteTitleIsStored() {
      var note = new Note("tesfdsfdsfdst note");
      
      expect.toEqual(note.title, "test note");
      
    };
  
    testNoteTitleIsStored();
  })(this);



// function testCircleRadiusDefaultsTo10() {
//   var circle = new Circle();
//   var assert = new assert();
//   assert.isTrue(circle.radius === 10);
// };

// testCircleRadiusDefaultsTo10();