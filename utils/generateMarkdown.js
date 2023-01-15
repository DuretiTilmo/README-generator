// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const fs = require("fs");
// const inquirer = require("inquirer");
const index = require("../index.js");

function renderLicenseBadge(license) {
  let licenseBadge = ''
  if (license === 'MIT License') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === 'Apache License 2.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else if (license === 'General Public License 3.0') {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else if (license === 'Eclipse Public License 1.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;
  } else if (license === 'None') {
    licenseBadge = " ";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ''
  if (license === 'MIT License') {
    licenseLink = `(https://opensource.org/licenses/MIT)`;
  } else if (license === 'Apache License 2.0') {
    licenseLink = `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'General Public License 3.0') {
    licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'Eclipse Public License 1.0') {
    licenseLink = `(https://opensource.org/licenses/EPL-1.0)`;
  } else if (license === 'None') {
    licenseLink = " ";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'None'){
    licenseSection = " ";
  } else {
    licenseSection = `${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  // const  data = ({title, description, installation, usage, license, test, contribution, link_1, link_2}) => { 
    return `# ${data.title}
    ## Table of Content
      - [Description](#Description})
      - [Usage](#Usage)
      - [Installation](#Installation)
      - [Contributing Guidelines](#Contribution)
      - [Test] (#Test)
      - [License] (#License)
      - [Questions] (#Links})
    
    
    ## Overview
    ​
    ### Description
    ${data.description}
    
    ## Usage
    ${data.usage}
    
    ### Installation
    ​${data.installation}
    ​
    ​### Contributing Guidelines
    ${data.contribution}
   
    ### Test 
    ${data.test}
   
    ### License 
    ${renderLicenseSection(data.license)}
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}
   
    ### Links
    ​
    - Linkedn URL: ${data.link_1}
    - Github URL: ${data.link_2}`
   
   }
// }
module.exports = generateMarkdown;
