//toEqual(Array.isArray(NoteArray), true)
'use strict';

var expect = {
  toEqual: function(assertionToCheck,result) {
    if (assertionToCheck !== result) {
      throw new Error("Assertion failed: " + assertionToCheck + " does not match " + result + ".");
    }
  }
};



// var assert = {
//   isTrue: function(assertionToCheck) {
//     if (!assertionToCheck) {
//       throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
//     }
//   }
// };

