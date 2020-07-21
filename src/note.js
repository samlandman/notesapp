'use strict';

class NoteApp {
  constructor(){
    this.noteArray = [];
    this.note20 = [];
  }

  create (title) {
    if (title === "") {
      throw new Error('Please insert your message');
    }
    this.title = title;
    this.noteArray.push(title)
    this.note20.push(title.substring(0,20))
  };

};

