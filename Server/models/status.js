const con = require("./db_connect");
async function createStatus() {
  let sql = ` CREATE TABLE IF NOT EXISTS status (
    status_id INT NOT NULL AUTO_INCREMENT,
    status INT,
    upvote INT,
    downvote INT,
    username VARCHAR (255),
    CONSTRAINT status_pk PRIMARY KEY(status_id),
    CONSTRAINT username FOREIGN KEY(username) REFERENCES users(username)
    )`;
  await con.query(sql);
}
createStatus();


let getStatus = async () => {
    const sql = "SELECT * FROM status";
    return await con.query(sql);
  };
  

  
async function getStatuses(statinfo) {
    let sql;
    if(statinfo.statId) {
      sql = `SELECT * FROM status
        WHERE status_id = ${statinfo.statId}
      `;
    } else {
      sql = `SELECT * FROM status
        WHERE status = "${statinfo.stat}"
      `;
    }
}

async function postUpvote(statinfo) {
   const u = statusExists(statinfo.information);
  if(u.length>0) throw Error("status already exists");

    const sql = `INSERT INTO status (status, upvote)
    VALUES ("${statinfo.stat}", "${statinfo.userupvote}")
    `;
  
    const insert = await con.query(sql);
    const newUpvote = await getStatus(statinfo);
    return newUpvote[0];
  }


  async function postdownvote(statinfo) {
    const u = statusExists(statinfo.information);
  if(u.length>0) throw Error("status already exists");

    const sql = `INSERT INTO status (status, downvote)
    VALUES ("${statinfo.stat}", "${statinfo.userdvote}")
    `;
  
    const insert = await con.query(sql);
    const newDownvote = await getStatus(statinfo);
    return newDownvote[0];
  }


  async function statusExists(statinformation) {
    const sql = `SELECT * FROM status
      WHERE status = "${statinformation}"
    `;
    return await con.query(sql);
  }

  async function editstatus (statinfo) {
    const sql = `UPDATE status SET
      status = "${statinfo.stat}"
      WHERE status_id = ${statinfo.statId}
    `;
    const update = await con.query(sql);
    const newStatus = await getNote(statinfo);
    return newStatus[0];
  }
  module.exports = { getStatus, getStatuses, postUpvote, postdownvote, statusExists, editstatus, createStatus};