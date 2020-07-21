'use strict';

class NoteApp {
  constructor(){
    this.noteArray = [];
  }

  note (title) {
    if (title === "") {
      throw new Error('Please insert your message');
    }
    this.title = title;
    this.noteArray.push(title)
  };

};

