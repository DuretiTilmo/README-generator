// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// const npmInstall = require('npm i');
// console.log(npmInstall);
// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please provide short description of your project",
            name: "description",
        },
        {
            type: "input",
            message: "What step should be followed to install your project?",
            name: "installation",
        },
        {
            type: "input",
            message: "What is the usage of your project?",
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
            message: "How can your project be tested?",
            name: "test"
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data);
    // console.log('From write to file method');
    // console.log(readmeContent);
    // console.log('END');

      fs.writeFile(fileName, readmeContent, (err) => 
      err ? console.log(err) : console.log('Successfully created a README file!')
      );
};
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => { 
    // const {title, description, installation, usage, license, test, contribution, link_1, link_2} = data;
     //   console.log(data);
   // var readmeContent = generateMarkdown(data);
    writeToFile('README.md',  data);
    })
}

// Function call to initialize app
init();
