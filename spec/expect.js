'use strict';

var expect = {
  toEqual: function(string, assertionToCheck,result) {
    if (assertionToCheck !== result) {
      throw new Error(string + " failed: " + assertionToCheck + " does not match " + result + ".");
    } else {
      console.log(string);
    }
  },

  toRaiseError: function(string, assertionToCheck, result){
    try{
      eval(assertionToCheck);
      throw new Error("No error recieved");
    } catch (error){
      this.toEqual(string, error.message, result)
    }
    
  }
};