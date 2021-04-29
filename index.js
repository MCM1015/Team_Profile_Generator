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
                        if (role === 'Engineer') {
                            createEngineer();
                        } else if (role === 'Intern') {
                            createIntern();
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
                                ]).then((internData) => {
                                    const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
                                    if (internData.role === 'Engineer') {
                                        createEngineer();
                                    } else if (internData.role === 'Intern') {
                                        createIntern();
                                    } else {
                                        writeToFile('./output/index.html', webpageTemplate(name, id, email, officeNumber, github, school));
                                        console.log(name, id, email, school, officeNumber, github, role);
                                    }
                                });
                            }
                        } else {
                            writeToFile('./output/index.html', webpageTemplate(name, id, email, github));
                            console.log(name, id, email, github, role)
                        }
                    });
                }
            } else if (role === 'Intern') {
                createIntern();
            } else {
                writeToFile('./output/index.html', webpageTemplate(manager.getName(), manager.getId(), manager.getEmail(), manager.getOfficeNumber()));
                console.log(name, id, email, officeNumber, role)
            }
        });
    }

  
 

    createTeam();
}

Input();