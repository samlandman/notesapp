'use strict';

var expect = {
  toEqual: function(string, assertionToCheck,result) {
    if (assertionToCheck !== result) {
      throw new Error("Assertion failed: " + assertionToCheck + " does not match " + result + ".");
    } else {
      console.log(string);
    }
  }
};