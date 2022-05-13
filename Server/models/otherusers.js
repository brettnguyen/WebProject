const con = require("./db_connect");
async function createOtheruser() {
  let sql = ` CREATE TABLE IF NOT EXISTS otherusers (
    otherusers_id INT NOT NULL AUTO_INCREMENT,
    otherusername VARCHAR(255),
    otherusernotes VARCHAR(255),
    username VARCHAR(255),
    CONSTRAINT otheruser_fk FOREIGN KEY(username) REFERENCES users(username),
    CONSTRAINT otheruser_pk PRIMARY KEY(otherusers_id)
)`;
  await con.query(sql);
}
createOtheruser();

let getotherUsers = async () => {
    const sql = "SELECT * FROM users";
    return await con.query(sql);
  };
  
async function getotherUser(otheruser) {
    let sql;
    if(otheruser.userId) {
      sql = `SELECT * FROM otherusers
        WHERE otheruser_id = ${otheruser.userId}
      `;
    } else {
      sql = `SELECT * FROM otherusers
        WHERE otherusername = "${otheruser.username}"
      `;
    }
  
    return await con.query(sql);
  }

  let getothernotes = async () => {
    const sql = "SELECT othersnotes FROM otherusers";
    return await con.query(sql);
  };

  async function getotherUserNotes (otheruser) {
    let sql;
    if(otheruser.userId) {
      sql = `SELECT * FROM otherusers
        WHERE otherusernotes = ${otheruser.O_notes}
      `;
    } else {
      sql = `SELECT * FROM otherusers
        WHERE otherusername = "${otheruser.username}"
      `;
    }
  
    return await con.query(sql);
  }

  async function postNote(otheruser) {
   
    const sql = `INSERT INTO otheruser (otherusernotes, username)
    VALUES ("${otheruser.othernote}", "${otheruser.username}")
    `;
  
    const insert = await con.query(sql);
    const newNote = await getotherUserNotes(otheruser);
    return newNote[0];
  }


  async function editotherNote(otheruser) {
    const sql = `UPDATE otheruser SET
      otherusernotes = "${otheruser.O_note}"
      WHERE username = ${otheruser.username}
    `;
    const update = await con.query(sql);
    const newNote = await getNote(noteinfo);
    return newNote[0];
  }

  async function deleteotherNote(username) {
    const sql = `DELETE FROM otherusernotes 
      WHERE username = ${username}
    `;
    await con.query(sql);
   
  }

  module.exports = { getotherUser, getotherUsers, postNote, getotherUserNotes, getothernotes, editotherNote, deleteotherNote, createOtheruser};

 
  
  