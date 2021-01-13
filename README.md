# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features of this react-app

The application provides following functionality

1. Allows login using a username(email) and password form fields
2. Displays dummy components upon successful login
3. Upon failure of login prompts the user with relevant alert messages.

## Validations implemented

  #### Email should be in proper format ["@" and ".com"]
  #### Password should be atleast 6 characters with atleast one
   1.  Upper case character
   2.  Lower case character
   3.  Special character
   4.  Numeber
   
## BackEnd
  * To see the complete functioning of this application you need to run the backend server 
  * Link for the Backend server [https://github.com/aachalV/10-React-Login-Backend.git]
  * Clone the repo and start the server
  * Necessary authentication is implemented in the Backend
  
## FrontEnd (Current Repo)
(After the Backend part is done)
In the project directory, you can run:

### `npm install ` 
Installs all the required dependancies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Concepts
  1. Hooks
      > * useState 
      > * useHistory
    
  2. Regex (For validations)
      > * email validation 
      > * password validation
    
  3. Routing using
      > * BrowserRouter
      > * Switch
      > * Route
        > From react-router-dom
      
 ### Packages
  1. ParticlesBg
 
 
 > Add following external links and scripts in your index.html present in public folder
 
 ### External links
   <!-- bootstrap -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
  ### Scripts
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
   


