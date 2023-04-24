# Social Network API
![License](https://img.shields.io/badge/License%20-MIT-orange)
![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)  ![Noje.js](https://img.shields.io/badge/-node.js-brightgreen)  ![Screencastify](https://img.shields.io/badge/-Screencastify-red) 
# Description
This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses `Express.js` for routing, a `MongoDB` database, the `Mongoose ODM` and `Moment.js` to format timestamps. `Insomnia` was used to create data.


## Table of Contents
  - [Application Preview](#application-preview)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Technologies](#techonologies)
  - [Tests](#tests)
  - [Contribution](#Contribution)
  - [License](#License)

  ## Techonologies

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Moment.js](https://www.npmjs.com/package/moment)
* [Insomnia](https://insomnia.rest/download) 


## Installation 
* This applicaton requires Express, MongoDB, and Mongoose.
* In order to use this application you must clone the repository on your local machine and run `npm i`. Once dependencies are installed type `npm start` to connect to server.

## Usage
After installing the require dependencies you can proceed to:
* Invoke the application by typing: `npm start` and press enter.
* Once the server is started, the Mongoose models are synched to the MongoDB database. Now you can open MongoDB and connect to the MongoDB URI `mongodb://localhost:27017/socialDB`
* Use [Insomnia](https://insomnia.rest/download) to interact with the app and create seed data and to test the API routes.

## Test
Insomnia was used to test REST API calls.


## Contribution
For questions please reach me at: giuliana@gmail.com <br/>
My Github: [Giuliana](https://github.com/gj3chavez)


## License
  ![License](https://img.shields.io/badge/License%20-MIT-orange)
  
  Copyright (c) 2023 gj3chavez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.