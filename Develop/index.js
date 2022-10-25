// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: "input",
        name: "motivation",
        message: "What motivated you to make this?"
    },
    {
        type: "input",
        name: "solve",
        message: "What problem does this solve?" 
    },
    {
        type: "input",
        name: "learn",
        message: "What did you learn?"
    },
    {
        type: "input",
        name: "motivation",
        message: "What problem does this solve?" 
    }
]).then((data) => {
    fs.writeFile("README.md", JSON.stringify(data), (err) => {
        err ? console.log(err) : console.log("Saved succesfully.")
    })
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
