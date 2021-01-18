const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    // Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    {
        type: 'insert',
        message: "What's the title of your project?",
        name: 'title'
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
