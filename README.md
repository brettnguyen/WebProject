
**Notes app:**

**FUNCTIONS:**

-A user can create an account under the register page after creating a username and password.

-A user can then login to get the notes homepage by putting in the exact username and password they created. A username and password MUST be created to be able to login and get past the login screen.

-A user can navigate with the tab bar on the top of each page after logging in. The home tab takes you to the home page, the logout page logs you out, and the profile page takes you to the profile page. On the home page specifically the home and profile icons will also take you to the home page or profile page as another navigation option. However, they are only on the home page.

-A user can delete there account in the profile page
where it displays your username the "delete account" button. To delete an account click the delete account button and confirm. WARNING when deleting an account your account will be gone forever. This will also take you back to the register page.

-A user can write a note inside a input box and submit a note to be saved and posted.

-A user can delete a note by pushing the delete button that appears under each note.

-A user can edit a note by pushing the edit button that appears under each note. They then must type a new note inside the new input text book that appears and then push finish.

-A user can cancel the ability to edit a note and keep there previous note by pushing cancel when it appears after you click the edit button.

<pre>

</pre>

**BUGS:**

-The lottie animation for the login page doesn't always fit the screen.

-On the home page the green lines going vertical don't reach the bottom of the page but they do go further down as the page increases in size with the amount of notes that populate the page.

-The input that goes over the note when you click edit isn't the correct size and doesn't fit the same size as normal notes.

-The input edit text is a little off spacing too.

-The profile and home tab icons on the home page aren't on the profile page.

<pre>

</pre>

**FRAME WORKS/PROGRAMMING LANGUAGES:**

**FRONT END:**
-HTML and css were used to create the designs of each page

-Javascript was used to create the functionality of each page, and create objects as well as used to retreive the information for each page

**BACK END:**

-Node.js and Express.js were used to connect and obtain information from my database.

-mySQL was used as my database.

<pre>

</pre>

**ERD:**

![ERD](https://user-images.githubusercontent.com/77566307/168482528-46ecc7a9-4f23-4a7b-885e-3e3f79ccba54.png)

<pre>

</pre>

**HOW TO DOWNLOAD AND USE:**

**NODE AND EXPRESS:**

-Run npm install and npm will install all the dependencies listed

-Download Node.js via their website: https://nodejs.dev/

-In visual studio code open terminal and enter the command: npm init

-Next, install express in the terminal using npm install express.

-Then in the terminal run npm install nodemon --save-dev

<pre>

</pre>

**mySQL:**

**Windows:**

-Use the MySQL Community installer for Windows: https://
dev.mysql.com/downloads/installer/

-Follow the directions and pick the default options. You
will have to pick a password and username. Be sure to
remember them.

-In your windows search bar, search for the MySQL
Command Line Client and open it. Enter your password. 

**Mac:**

-Go to the following link and download the version for your operating system:
https://dev.mysql.com/downloads/mysql/

-Follow the steps to download. You may already have an oracle account from
when you downloaded Java.

-Open your terminal and create a bash_profile if you don’t already have one:
touch ~/.bash_profile;

-Next, open your bash_profile using: open ~/.bash_profile

-Add the following to it: export PATH=${PATH}:/usr/local/mysql/bin/

-Close it then run: Mysql -u root -p and enter the password you received when
you initially installed. You will have to run this every time you want to use MySQL.

-Create a new password for the root user by running: ALTER USER
'root'@'localhost' IDENTIFIED BY ‘yournewpassword'

-If you run into an error, take your setup out of Strict Mode: SET
@@global.sql_mode= '';

<pre>

</pre>

**RUN PROJECT:**

-Start your server, open up your terminal and enter the
command npm run dev --Must have mySQL Data base look below to see how that work--.

<pre>

</pre>

**WEBSITE IMAGES:**
