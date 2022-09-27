// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const genReadMe = require('./genReadMe');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project, including the what, why, and how of your project, i.e., motivation, why you built it, what problems it solves, what did you learn, and why it is important:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command is usded to install this application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this application used?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who has contributed to building this application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your application have?',
        choices: ['Apache', 'MIT', 'None'],
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would one test this application?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github?'
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Generating your README :)")
        writeToFile("README.md", genReadMe({...inquirerResponses}))
    })
}

// Function call to initialize app
init();
