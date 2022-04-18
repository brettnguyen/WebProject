class User {
    constructor(id, userName, pswd) {
      this.userId = id;
      this.userName = userName;
      this.setUserPassword(pswd);
    }
    //get methods
    getUserId() {
      return this.userId;
    }
    getUserName() {
      return this.userName;
    }
    getUserPassword() {
      return this.userPassword;
    }
    //set methods
    setUserId(id) {
      this.userId = id;
    }
    setUserName(userName) {
      this.userName = userName;
    }
    setUserPassword(pswd) {
      if(this.validPassword(pswd)) {
        this.userPassword = pswd;
      } else {
        console.log("Password must have at least 1 uppercase letter, 1 symbol, 2 numbers," 
          + "and have a length of at least 8 characters.");
      }
    }
    //valid password method
    validPassword(pswd) {
      if(pswd.length >= 8) {
          return true;
      }
      return false;
    }
    
  }
  
  function registerUser()
{
  var registerUser = document.getElementById("newUser").value
  var registerPassword = document.getElementById("newPassword").value
  var newUser = [{
      userName: registerUser,
      userPassword: registerPassword
  }];

  console.log(newUser)
  //window.location.href = "Login.html"
}







