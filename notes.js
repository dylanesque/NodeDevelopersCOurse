console.log('Starting notes.js');

const fs = require('fs');

//Reads the file and returns a version of it in JSON, or returns an empty array if nothing exists.
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

//Takes the notes prameter and writes a string version of it to file.
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };



  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
    var noteSuccess = "Note was created!";
  } else {
    var noteFailure = "Note creation failed!";
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  //Fetch notes.
  //Filter notes
  //Remove note that matches provided title.
  var notes = fetchNotes();
  var filteredNotes = notes.fiter((note) => note.title !== title);
    saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
  }

  var logNote = (note) => {
    console.log("--");
    console.log(`Title: ${note.title}.`);
    console.log(`Body: ${note.body}.`);
  }

module.exports = {
  addNote,
  getAll,
  getNote,
  logNote,
  removeNote
};


