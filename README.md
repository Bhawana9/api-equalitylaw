# Assignment 2 - ReactJS App & API.

Name: .Bhawana Sharma...

## Overview.
Harassment App: Itï¿½s a harassment or equality law app where user can lodge a complaint against any harassment that happened in their office either by co-workers or by another person.

 . . . . . List of user features (excluding user registration and authentication)
 . . . . 
Add employee profile
Edit employee profile
Delete Employee account
Add Employee experience
Delete Employee experience
Edit Employee experience
Add Complaints
Lists of User complaints filed
List of User experience
About Us page
Contact Us page (Google Maps React)
Loading Page
404 page
UI Validation
Logout

## Data Model Design.
![DataModel](Data-model.jpg)

## UI Design.
![Screen](Screen.jpg)


##Data Flow-Redux
![Data-flow-Redux](data-flow-redux.jpg)

## Routing.
. . . . List each route supported and state the associated view . . . . . 
+ /register – Register the new user
+ /login- Login the register user
+ /dashboard-Display the list of complaints and user experience
+ /create-profile- Create a user profile
+ /edit-profile- Edit the particular user profile
+ /add-experience-Add the experience to logged in use
+ /complaints- Add a complaints to register user
+ /edit-experience- Edit the experience
+ /about-Display the vision, mission and goals
+ /contact-Display Google Map and Contact details
+ /-Display Not found page

Specify which, if any, of the above routes are protected (require login)
1.Dashboard Page
2.Create profile page
3.Edit profile page
4.Add Experience page
5.Edit Experience page

6.Add Complaints Page

# Web API Endpoint Reference
. . . User &Auth (Login Register and Logout) ,Profile (Add profile ,Delete profile, Edit profile, Add Experience, Delete Experience, Edit Experience, Add Complaints , View Complaints

## Web API Install and Operation
"scripts": {
    "server": "nodemon server.js",
    "start": "node --exec babel-node server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "test": "cross-env NODE_ENV=test && mocha tests/**/*.tests.js  --require babel-core/register --require babel-polyfill --exit",
    "heroku-postbuild":"NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
  },
## API Design
Describe your web API.

| HTTP Verb & Path |  Description |
| -- | -- |
| **GET** /api/auth |user logged in|
| **GET** /api/profile/me |user logged and get profile|
| **GET** /api/profile/user/:id |get profile by id|

| **POST** /api/users |add a new user |
| **POST** /api/users/logout |add a new user |
| **POST** /api/profile |update and add new profile|

| **PUT** /posts/api/experience | update a profile by adding experience |
| **PUT** /posts/api/complaints | update a profile by adding complaints|

| **DELETE** /delete/api/experience | delete experience |
| **DELETE** /delete/api/profile | delete experience |

## API Configuration
Describe the configuration approach for your endpoint. For example, contents of config file and where it should be located:
~~~bash
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb+srv://equalitylawapp:dreameu@2019@cluster0-phrta.mongodb.net/test
jwtsecret=thisissecretformyapp

~~~

## Security and Authentication
. . . . User is authenticated by the token ,password encrypted by bcrypt, 
Authentication middleware to block access to the api/profile etc for unauthenticated users
## Testing
I have performed unit along with integration testing.
## Extra features

. . . . . 
1.Firebase Authentication
2.UI Validation (Add Complaints Form)
3.Data Validation using Firebase
4.Redux-to manage data flow
5.Header and Footer
6.Linking among pages
7.Responsive Web design
8.For re-rendering: Redux implemented in a just single store with action and reducers folder which manage the state of the component.
(view->Action->reducer(s)->store->view)  
. . . . . .  

## Independent learning.

Heroku deployment

[model]: ./data.jpg
[image3]: ./screen.png
[stories]: ./storybook.png
[image4]: ./testing.png
