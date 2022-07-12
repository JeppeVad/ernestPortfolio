#ernestPorfolio

Portfoilo page for Ernest


Please, take into account that in order to run this, is it mandatory to download a program in order to manage Databases. One of the many options you can try is [MySql Community Server:](https://dev.mysql.com/downloads/mysql/)  

And as the Guide says, set up the database and try establishing the connection with it. The database is provided on the *Doc*->*dbWithProjects.sql*

Check the dotfile *.env* and match it with the credentials of your OS. For example, mine *.env* follows as:

```
HOST = 127.0.0.1
DBUSER = root
PASSWORD = password
DB = ernestPortfolio
DBPORT = 3306
PORT = 3000
SESSION_SECRET = secret
```

On the last step provided by the guide on the folder *Doc*->*Ernest webpage small guide.docx* if you encounter a while running the command: **npm run dev** please check if is one of the following ones:

1. code: 'EADDRINUSE', errno: -48, syscall: 'listen', address: '::', port: 3000 

What reports here the code *'EADDRINUSE'* is that the port you are trying to issue app.listen() on is being used by other programs. Try please the following steps:

```
ps -aef | grep 'node'
```

And then, kill the process with PID that appears on the (second column) on OSX by doing:

```
kill -9 PID
```

Then, try again: 

```
npm run dev
```

And if the following piece of code appears:

```
[nodemon] 1.19.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Server has started at port 3000
```

The server will start correctly the page

2. code: 'ER_BAD_DB_ERROR', errno: 1049, sqlMessage: "Unknown database 'mvc'", sqlState: '42000', fatal: true

Here you have a problem with the name of the currently database. The *.env* provides a different name of it, consider changing it to according the database that you are using. In this case, change the *.env* and change the DB field:

```
DB = ernestPortfolio
```

3. “code: 'er_not_supported_auth_mode', errno: 1251, sqlmessage: 'client does not support authentication protocol requested by server; consider upgrading mysql client', sqlstate: '08004', fatal: true

Here you have an issue with the configuration of the database. Try reconfigurating MySQL Server. Try adding on the top of the file *Doc*->*dbWithProjects.sql*, the following code:

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'you_current_password';
```

If this does not solve your issue, check this [stackoverflow question](https://stackoverflow.com/questions/51147964/errno-1251-sqlmessage-client-does-not-support-authentication-protocol-reques)
