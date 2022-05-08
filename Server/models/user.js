const users = [
    {
    userId: 12345,
    userName: "Brett",
    password: "test"
    }
];

let getUsers = () => users;

 function login(username, password) {
    const user = users.filter((u) => u.userName == username);
    if(!user[0]) throw Error('User not found');
    if(user[0].user_password !== password) throw Error("Password is incorrect");
  
    return user[0];
  }
module.exports = { getUsers, login };