// TODO: Include packages needed for this application
const generateReadme = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Enter the project title: (REQUIRED)',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('You must enter the project title!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Enter the project description: (REQUIRED)',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('You must enter a project description!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage', 
    message: 'Enter usage information: (REQUIRED)',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('You must enter usage information!');
            return false;
        }
    } 
},
{
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution: (REQUIRED)',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log('You must enter contribution information!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address (REQUIRED)',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('You must enter an email address!');
            return false;
        }
    }
},
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

//Function for README file
function writeFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README file created!'
            })
        })
    })
}

//Initialize program function
function init() {
    promptUser()
        .then(questions => {
            return generateReadme(questions);
        })
        .then(formattedPage => {
            return writeFile(formattedPage);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        })
}

//Initialize program function call
init();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
