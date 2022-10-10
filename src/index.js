const inquirer  = require("inquirer");

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
    ])
};

// inquirer prompts for Engineer

// inquirer prompts for Intern

