const con = require("./db_connect");
async function createNotes() {
  let sql = ` CREATE TABLE IF NOT EXISTS notes (
    notes_id INT NOT NULL AUTO_INCREMENT,
    note VARCHAR(255),
    username VARCHAR(255),
    CONSTRAINT notes_pk PRIMARY KEY(notes_id),
    CONSTRAINT user_fk FOREIGN KEY(username) REFERENCES users(username) ON DELETE CASCADE
    )`;
  await con.query(sql);
}
createNotes();

let getNotes = async () => {
  const sql = "SELECT * FROM notes";
  return await con.query(sql);
};

async function getAllNotes() {
  let sql;
    sql = `SELECT note, username, notes_id FROM notes  `;
    

  return await con.query(sql);
}

async function getNote(noteinfo) {
  let sql;
  if(noteinfo.noteId) {
    sql = `SELECT * FROM notes
      WHERE notes_id = ${noteinfo.noteId}
    `;
  } else {
    sql = `SELECT * FROM notes
      WHERE note = "${noteinfo.note}"
    `;
  }

  return await con.query(sql);
}

async function createNote(noteinfo) {
   
    const sql = `INSERT INTO notes (note, username)
    VALUES ("${noteinfo.note}", "${noteinfo.username}")
    `;
  
    const insert = await con.query(sql);
    const newNote = await getNote(noteinfo);
    return newNote[0];
  }

  async function noteExists(information) {
    const sql = `SELECT * FROM notes
      WHERE note = "${information}"
    `;
    return await con.query(sql);
  }

  async function editNote(noteinfo) {
    const sql = `UPDATE notes SET
      note = "${noteinfo.note}"
      WHERE notes_id = ${noteinfo.noteId}
    `;
    const update = await con.query(sql);
    const newUser = await getNote(noteinfo);
    return newUser[0];
  }

  async function deleteNote(noteId) {
    const sql = `DELETE FROM notes 
      WHERE notes_id = ${noteId}
    `;
    await con.query(sql);
   
  }



module.exports = { getNotes, getAllNotes, getNote, createNotes, createNote, noteExists, editNote, deleteNote};