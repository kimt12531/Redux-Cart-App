# Redux Cart App
Redux Cart App is a simple shopping cart app developed in React with Javascript. It is connected to a backend database hosted by firebase realtime database, where products are fetched and cart items are updated. This project uses the react-redux library and the redux toolkit to manage state with reducers.

In addition for visibility, a notification will appear in the UI to indicate reponse status during and after network requests. The shopping cart may also be toggled via clicking *My Cart*. 

This portfolio project was completed as part of Advanced Redux coursework for [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) on Udemy instructed by Maximillian Schwarzmüller.

Further enhancements were added outside of course requirements including:
- redux to manage the shop products, replacing the dummy products object provided in the starter code
- implemented a checkout button at the bottom of 'Your Shopping Cart'
- changes to CSS modules

## Prerequisites
- Please ensure that you have npm and node on your local machine
- Clone this remote repository https://github.com/kimt12531/Redux-Cart-App.git

## Installing dependencies
- `npm install`
    - If there is an error with the installation, please delete `node_modules` and `package-lock.json` in the root directory and attempt to install again.
    
## Running the app
- `npm start`
    - Please wait until terminal has shown it has "Compiled Successfully!". The app would be running on http://localhost:3000 by default.
    - If npm errors appear in the terminal, please ensure that you have installed dependencies and there exists a `package-lock.json` file.
