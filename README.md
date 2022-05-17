
**<h1>Notes app:</h1>**

A Notes app. That in the future will allow you to visit other users pages to view there notes too. As well as add upvote and downvote options to notes on either your page or other users pages. The function to add notes to other users pages is something to be implemented in the future as well.

<pre>

</pre>

**<h1>Notes app video demonstration of it working:</h1>**
https://user-images.githubusercontent.com/77566307/168509539-33690979-7f7c-4a82-95bd-e176d03efa9c.mp4

<pre>

</pre>

**<h2>FUNCTIONS:</h2>**

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

**<h2>BUGS:</h2>**

-If you are logged in and you revisit the localhost:3000 that it is linked to and you havent cleared your browsers cache you will recieve an error/issues. Make sure to click the logout tab on top of the login screen ONLY if you see it on the login page or clear your browsers cache.

-The lottie animation for the login page doesn't always fit the screen.

-On the home page the green lines going vertical don't reach the bottom of the page but they do go further down as the page increases in size with the amount of notes that populate the page.

-The input that goes over the note when you click edit isn't the correct size and doesn't fit the same size as normal notes.

-The input edit text is a little off spacing too.

-The profile and home tab icons on the home page aren't on the profile page.

-Resizing the page on the home page causes objects to move away from there current locations

<pre>

</pre>

**<h2>FRAME WORKS/PROGRAMMING LANGUAGES:</h2>**

**<h3>FRONT END:</h3>**

-HTML and css were used to create the designs of each page

-Javascript was used to create the functionality of each page, and create objects as well as used to retreive the information for each page

**<h3>BACK END:</h3>**

-Node.js and Express.js were used to connect and obtain information from my database.

-mySQL was used as my database.

<pre>

</pre>

**<h2>ERD:</h2>**

![ERD](https://user-images.githubusercontent.com/77566307/168484555-8f56814c-563e-413c-8966-2725021e5458.png)

<pre>

</pre>

**<h2>HOW TO DOWNLOAD AND USE:</h2>**

**<h3>NODE AND EXPRESS:</h3>**

1. Run npm install and npm will install all the dependencies listed

2. Download Node.js via their website: https://nodejs.dev/

3. In visual studio code open terminal and enter the command: npm init

4. Next, install express in the terminal using npm install express.

5. Then in the terminal run npm install nodemon --save-dev

**<h3>mySQL:</h3>**

**<h4>Windows:</h4>**

1. Use the MySQL Community installer for Windows: https:// dev.mysql.com/downloads/installer/

2. Follow the directions and pick the default options. You will have to pick a password and username. Be sure to remember them.

3. In your windows search bar, search for the MySQL Command Line Client and open it. Enter your password.

**<h4>Mac:</h4>**

1. Go to the following link and download the version for your operating system: https://dev.mysql.com/downloads/mysql/

2. Follow the steps to download. You may already have an oracle account from when you downloaded Java.

3. Open your terminal and create a bash_profile if you don’t already have one: touch ~/.bash_profile;

4. Next, open your bash_profile using: open ~/.bash_profile

5. Add the following to it: export PATH=${PATH}:/usr/local/mysql/bin/

6. Close it then run: Mysql -u root -p and enter the password you received when you initially installed. You will have to run this every time you want to use MySQL.

7. Create a new password for the root user by running: ALTER USER 'root'@'localhost' IDENTIFIED BY ‘yournewpassword'

8. If you run into an error, take your setup out of Strict Mode: SET @@global.sql_mode= '';

<pre>

</pre>

**<h2>RUN PROJECT:</h2>**

1. Start your server, open up your terminal and enter the command npm run dev --Must have mySQL Data base look below to see how that work--.

2. Go to a browser and type in localhost:3000 then enter.

<pre>

</pre>

**<h2>WEBSITE IMAGES:</h2>**

<h3>Login page:</h3>

![leaflogin](https://user-images.githubusercontent.com/77566307/168485196-990e41a9-2334-49f4-9e3f-c16482249863.png)

<h3>Register Page:</h3>

![leafreg](https://user-images.githubusercontent.com/77566307/168485197-5b19307f-420e-44c8-9590-f0e4a6d3d872.png)

 <h3>Home Page:</h3>

![leafhome](https://user-images.githubusercontent.com/77566307/168485204-68cb139c-b954-47bb-9ff0-ae63f69eb3d0.png)

<h3>Enter Note on home page:</h3>

![leafhometest](https://user-images.githubusercontent.com/77566307/168485214-cf50a675-25fd-472e-805d-037a7e2aac53.png)

<h3>Note entered and result home page: (after clicking the post button after entering a note at the top)</h3>

![leafhomeresult](https://user-images.githubusercontent.com/77566307/168485218-04ce1af2-fbb9-49cc-af65-9f4a88e4a354.png)

<h3>Note delete option home page: (after clicking the delete button)</h3>

![leafdelete](https://user-images.githubusercontent.com/77566307/168485224-f660f5e4-24e4-4a40-8275-7a7aa3e80568.png)

<h3>Note deleted and result home page: (after clicking "ok" on prompt)</h3>

![leafhome](https://user-images.githubusercontent.com/77566307/168485232-a8eccb87-2cb8-4320-8062-997fe3415e8d.png)

<h3>Note edit option home page: (after clicking the edit button and typing text)</h3>

![editres](https://user-images.githubusercontent.com/77566307/168485242-d70bdab1-1831-4362-85d9-02bdd6089720.png)

<h3>Note edit entered result home page: (after clicking the edit button, typing text, then clicking the finish button)</h3>

![editfinish](https://user-images.githubusercontent.com/77566307/168485244-0c7d06a0-3fe3-404d-a949-a2f6dd28120f.png)

<h3>profile page:</h3>

![profile](https://user-images.githubusercontent.com/77566307/168485247-c39e4e13-c5f2-4cec-b0ff-119d9b992833.png)

