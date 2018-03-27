console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Command', command);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created!");
    console.log("--");
    console.log(`Title: ${note.title}.`);
    console.log(`Body: ${note.body}.`);
  } else {
    console.log("That note title already exists!");
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
  if (notes.length > filteredNotes.length) {
    console.log("Note was removed!");
  }
 } else {
  console.log('Command not recognized');
}


//use double quote on windows during commad line arugment instructions

