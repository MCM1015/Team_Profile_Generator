//Variables
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const webpageTemplate = require('./src/htmltemplate');

const teamEng = [];
const teamInt = [];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (error) =>
        error ? console.log(error) : console.log('Successfully created index.html!')
    );
}


//Functions
function Input() {

    function createTeam() {
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
                name: 'officeNumber',
                message: 'What is the Managers office number?'
                //validation
            },
            {
                type: 'list',
                name: 'role',
                message: 'What type of team member do you want to add?',
                choices: ['Engineer', 'Intern', 'I am done building my team']
            }
        ]).then(({ name, id, email, officeNumber, role }) => {
            const manager = new Manager(name, id, email, officeNumber);
            if (role === 'Engineer') {
                createEngineer();
            } else if (role === 'Intern') {
                createIntern();
            } else {
                writeToFile('./output/index.html', webpageTemplate(manager.getName(), manager.getId(), manager.getEmail(), manager.getOfficeNumber()));
            }
        });
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Engineers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Engineers id?'
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
                name: 'github',
                message: 'What is the Engineers GitHub username?'
            },
            {
                type: 'list',
                name: 'role',
                message: 'What type of team member do you want to add?',
                choices: ['Engineer', 'Intern', 'I am done building my team']
            }
        ]).then(({ name, id, email, github, role }) => {
            const engineer = new Engineer(name, id, email, github);
            //teamEng.push(engineer);
            // for (i = 0; i < teamEng.length; i++) {
            //     body.appendChild(`<div class="card mb-3 border-1 border-info rounded engineer m-1 p-0" style="max-width: 18rem;">
            //     <div class="card-header text-info bg-dark bold">
            //         <h4 class="card-title job">Engineer</h4>
            //         <h5 class="card-title name">${name}</h5>
            //     </div>
            //     <div class="card-body text-info bg-light">
            //         <ul class="card-text">
            //             <li>ID: ${id}</span></li>
            //             <li>Email: <a href="mailto:${email}">${email}</a></li>
            //             <li>GitHub: <span class="github">${github}</span></li>
            //         </ul>
            //     </div>
            //     </div>`);
            // }
            if (role === 'Engineer') {
                createEngineer();
            } else if (role === 'Intern') {
                createIntern();
            } else {
                writeToFile('./output/index.html', webpageTemplate(name, id, email, github));
            }
        });
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
            },
            {
                type: 'list',
                name: 'role',
                message: 'What type of team member do you want to add?',
                choices: ['Engineer', 'Intern', 'I am done building my team']
            }
        ]).then(({ name, id, email, school, officeNumber, github, role }) => {
            const intern = new Intern(name, id, email, school);
            //teamInt.push(intern)
            // for (i = 0; i < teamInt.length; i++) {
            //     body.appendChild(`<div class="card mb-3 border-1 border-info rounded intern m-1 p-0" style="max-width: 18rem;">
            //     <div class="card-header text-info bg-dark bold">
            //         <h4 class="card-title job">Intern</h4>
            //         <h5 class="card-title name">${name}</h5>
            //     </div>
            //     <div class="card-body text-info bg-light">
            //         <ul class="card-text">
            //             <li>ID: ${id}</li>
            //             <li>Email: <a href="mailto:${email}">${email}</a></li>
            //             <li>School: ${school}</li>
            //         </ul>
            //     </div>
            //     </div>`);
            // }
            if (role === 'Engineer') {
                createEngineer();
            } else if (role === 'Intern') {
                createIntern();
            } else {
                writeToFile('./output/index.html', webpageTemplate(name, id, email, officeNumber, github, school));
            }
        });
    }

    createTeam();
}

Input();