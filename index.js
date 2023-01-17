//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// An array of questions for user input
const questions = [
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please provide a short description of your project:",
            name: "description",
        },
        {
            type: "input",
            message: "What command should be run to install the dependencies?",
            name: "installation",
            default: "npm install"
        },
        {
            type: "input",
            message: "What does a user need to know about using your project?",
            name: "usage"
        },
        {
            type: "list",
            message: "What license do you want to use?",
            name: "license",
            choices: ["MIT License", "Apache License 2.0", "General Public License 3.0", "Eclipse Public License 1.0", "None"]
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "test",
        },
        {
            type: "input",
            message: "What guidline should a user follow to contribute to your project?",
            name: "contribution"
        },
        {
            type: "input",
            message: "Please provide your Email address",
            name: "link_1"
        },
        {
            type: "input",
            message: "Please provide your GitHub username ",
            name: "link_2"
        }
    ]

// A function to write README file
function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data);
      fs.writeFile(fileName, readmeContent, (err) => 
      err ? console.log(err) : console.log('Successfully created a README file!')
      );
};

// A function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => { 
    writeToFile('README.md',  data);
    })
}
init();
