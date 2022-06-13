// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('.//utils/generateMarkdown');

// const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = questionsData => {
    console.log (`
    ================================
    Create a Professional readme.md
    ================================
    `);

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username. (required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your README project. (required)',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title for your Readme.md');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description about your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation process.'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages is your project created with?',
            choices: [
                'HTML',
                'CSS',
                'Javascript',
                'React',
                'Python',
                'Other'
            ],
            validate: otherLanguage => {
                if(otherLanguage) {
                    return true;
                } else {
                    console.log('Please enter the Languages used for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is your project usage information?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who are the contributors for this project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the project test information.'

        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project.',
            choices: [
                'MIT',
                'APACHE 2.0',
                'GNU GPL 3.0',
                'ISC',
                'Other',
                'none'
            ],
            validate: licenseChoiceOther => {
                if(licenseChoiceOther) {
                    return true;
                } else {
                    console.log('Please enter the license for your project.');
                    return false;
                }
            }
        }
    ]);
};





// TODO: Create a function to write README file
writeToFile = () => {
    fs.writeFile('README.md', generateMarkdown(data), err => {
        if(err) throw err;
        console.log('Your README.md has been created successfully!');
    })
}

// TODO: Create a function to initialize app
function init() {
    questions() 
    
}

// Function call to initialize app
init();
