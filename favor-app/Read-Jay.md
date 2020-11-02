Steps to running the server:
pre requesets -
postman
  you can use the web version or download it, so you can send requests and check quickly
node
postgressql
  you need to download postgresql and launch the ssl command line, create a user and remember the password

Steps:
run npm install
open ssl
press enter until you get to the password and input your password
\l will bring up all the databases, there are some admin databases already installed.
go to database.sql in database folder.
copy paste the create database line and then to go into it \c
then copy the commented code with *** to generate uuids
then copy paste the create table authusers.
you should now have a table of authusers.
to check \d+
you can insert fake data so you can see it.

now you need to create a dotenv file in the server folder, call it .env
put inside it:
DB_CONNECT = [your password]
jwtSecret = templatesecret123 [this is just what im using as the secret]

you should now be able to see you have a database in postgres, this should be all you need to do before running.

run: npm run dev
this should start nodemeon, if it doesnt do it, just close it and run: npm start

localhost:5000 should now be active, and going to it should show a json response of "Landing"

you can now run postman to then run get, post, put and delete requests.

running localhost:5000/auth/login
needs a post with a raw json body of:
{
  "email": "",
  "password": ""
}
and localhost:5000/auth/register needs a post of raw json body of:
{
  "name": "",
  "email": "",
  "password": ""
}

doing any should result in a response of a token.

that token can be used in the header to access the profile.
which should return a name, and favour data of that user that is owing, I still have to display owed but I think I know how to do that.