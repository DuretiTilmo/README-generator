// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseBadge = ''
  if (license === 'MIT License') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Apache License 2.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'General Public License 3.0') {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'Eclipse Public License 1.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (license === 'None') {
    licenseBadge = " ";
  }
  return licenseBadge;
}

// A function that returns the license link
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

// A function that returns the license section of README
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'None'){
    licenseSection = " ";
  } else {
    licenseSection = `${license}`
  }
  return licenseSection;
}

//A function to generate markdown for README
function generateMarkdown(data) {
 const {title, description, installation, usage, license, test, contribution, link_1, link_2} = data;

  return `# ${title}
  ${renderLicenseBadge(license)} 
## Table of Content
- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)
-------------------------------------
## Description

    ${description}
    
## Usage

    ${usage}
    
## Installation

    ​${installation} 
    ​
## Contribution

    ${contribution}
   
## Test 

    ${test}
   
## License 
    
    Licensed under the ${renderLicenseSection(license)} 
${renderLicenseLink(license)}
-----------------------------------------

## Questions

  -Contact me:

    - Email Address: ${link_1}

    - Github Profile: ${link_2}`
   
}

module.exports = generateMarkdown;
