# React/Redux Express Boiler Plate

> Run your client and server with a single command

## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Folder Distribution

The workflow I currently use is as follows:

- client
    - public
        - index.html 
    - src
        - actions
        - Assets
            - css
            - scss
        - components
            - Customer
                - customers.css
                - customers.js
        - images
        - pages
        - store
            - actions
                - constants.js
                - fetchCustomers.js
            - reducers
                - customerReducer.js
                - combineReducers.js
            - devToolSetup.js
        - reducers
        - App.js
        - index.js
    - gulpfile.js
- server.js

This is my personal boiler plate for React, Redux and Express, simple setup that incorporates SASS with the gulp command if you need that option (writte "gulp" and then "gulp watch" to translate from scss to css), otherwise you can customize your components with their own style to reuse them when needed.

For those who don't know about Redux is pretty simple, it consists of ACTIONS (gives you the orders) which are sent to the REDUCERS (says exactly what to do with those orders) that will be inside a STORE which is accesible for all the components as a global state.

With this boiler plate you can generate data through the server.js and fetch it to show data on the front end.

## Closure

This is the Workflow I currently use, I find that its confortable to work with for any Application. Its only missing the database which I'm still figuring out, when I get more experience with that I'll add it. 

**Made by Adrian Beria.**

**React js Front-End Web Developer.**