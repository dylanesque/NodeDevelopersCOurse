console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Command', command);

if (command === 'add') {
  //pulls the title and body arguments from the command line and passes them into the
  notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created!");
    notes.logNote(note);
  } else {
    console.log("That note title already exists!");
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  console.log("Note requested");
  notes.logNote(note);
  if (note) {
    console.log("Here is the note you requested!");

  } else {
    console.log("We couldn't find you note. Here is an alternate one.");

  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed" : "No notes to remove!";

 } else {
  console.log('Command not recognized');
}



