'use strict';

var expect = {
  toEqual: function(assertionToCheck,result) {
    if (assertionToCheck !== result) {
      throw new Error("Assertion failed: " + assertionToCheck + " does not match " + result + ".");
    }
  }
};