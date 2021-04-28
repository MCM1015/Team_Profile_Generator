//Variables
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Functions
function Input() {
    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Managers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Managers id?'
                //validation
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Managers email?'
                //validation
            },
            {
                type: 'input',
                name: 'officenumber',
                message: 'What is the Managers office number?'
                //validation
            }
        ]);
        //createTeamMember();
    }
    function createTeamMember() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What type of team member do you want to add?',
                choices: ['Engineer', 'Intern', 'I do not want to add anymore team members at this time']
            }
        ]);
        if ('Engineer') {
            createEmployee();
        } if ('Intern') {
            createIntern();
        }
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Engineers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Engineers id?',
                //validation
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Engineers email?',
                //validation
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is the Engineers GitHub username?'
            }
        ]);
    }
    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Interns name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Interns id?'
                //validation
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Interns email?'
                //validation here
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does the intern go to?'
            }
        ]);
    }

createManager();
//createEmployee();
}

Input();