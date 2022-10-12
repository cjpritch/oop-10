const inquirer  = require("inquirer");
const { createManager } = require("../lib/Manager");
const { createEngineer } = require('../lib/Engineer');
const { createIntern } = require("../lib/Intern");

// inquirer prompts for Manager
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager you are adding?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Manager name required');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the id number of the manager?",            
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('An id number is required');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the email address for the manager?",            
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('An email address is required');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'phone',
            message: "What is the office phone number for the manager?",            
            validate: phoneInput => {
                if (phoneInput) {
                  return true;
                } else {
                  console.log('An office phone number is required');
                  return false;
                }
              }
        }
        // creates new manager object
    ]).then(createManager).then(engineerPrompt);
};

// inquirer prompts for Engineer
const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer you are adding?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Engineer name required');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the id number of the engineer?",            
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('An id number is required');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the email address for the engineer?",            
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('An email address is required');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the github username for the engineer?",            
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('A github username for the engineer is required');
                  return false;
                }
              }
        }
        // creates new engineer object 
    ]).then(createEngineer).then(internPrompt);
};

// inquirer prompts for Intern
const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern you are adding?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Intern name required');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the id number of the intern?",            
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('An id number is required');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the email address for the intern?",            
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('An email address is required');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the school the intern attends?",            
            validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log('A school name is required');
                  return false;
                }
              }
        }
        // creates new intern object
    ]).then(createIntern).then(process.exit)
};

module.exports = { managerPrompt };
