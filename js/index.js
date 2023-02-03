// TODO: Include packages needed for this application
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Project Title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Installation Instructions:',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Usage Information:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Contribution Guidelines:',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Test Instructions:',
    name: 'test',
  },
  {
    type: 'list',
    name: 'license',
    message: 'License Type:',
    choices: ['Apache', 'GNU', 'MIT'],
  },
  {
    type: 'input',
    message: 'GitHub Username:',
    name: 'gitUser',
  },
  {
    type: 'input',
    message: 'Email:',
    name: 'email',
  }
];

// TODO: Create a function to initialize app
function init() {
  const inquirer = require('inquirer');

  inquirer
  .prompt(questions)
  .then((response) =>
    handleResponse(response)
  );
}

// Function call to initialize app
init();

// TODO: Create a function to write README file
function handleResponse(response) {
  const genLicense = require('./generateMarkdown.js');

  genLicense.generateMarkdown(response.license);
    
  let readME = `
    #  ${response.title} 2/2/2023
    ## ${response.title}
    
    ## Description
    ${response.description}

    ## Table of Contents

    ## Badges 
    
    ## Visuals
    
    ## Installation
    ${response.install}

    ## Usage
    ${response.usage}

    ## Questions
    GitHub Username: ${response.gitUser} [Click here to go to GitHub Page](https://github.com/${response.gitUser})
    If you have any questions I can be reached at ${response.email}.
    
    ## License
    ${response.license}
    
    ## Contributing
    ${response.contribution}
    
    ## Authors and acknowledgment
    ${response.gitUser}
    
    ## Project status
    If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
    `
  ;
      
  console.log(response);
    
  fs.writeFile('README.md', readME, (err) =>
    err ? console.error(err) : console.log('Success: README created')
  );

};



