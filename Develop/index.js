// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
    
//}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "q0",
            message: "What is the project name?"
        },
        {
            type: "input",
            name: "q1",
            message: "What motivated you to make this?"
        },
        {
            type: "input",
            name: "q2",
            message: "Why did you build this?" 
        },
        {
            type: "input",
            name: "q3",
            message: "What did you learn?"
        },
        {
            type: "input",
            name: "q4",
            message: "What problem does this solve?" 
        }
    ]).then((data) => {
        const output = `# ${data['q0']}\n\n## Project Description\n\n${data['q1']}\n\n${data['q2']}\n\n${data['q3']}\n\n${data['q4']}\n\n## Credits: Christopher Armstrong`

        fs.writeFile("README.md", (output), (err) => 
        {
        err ? console.log(err) : console.log("Saved succesfully.")
        })
    });
}

// Function call to initialize app
init();
