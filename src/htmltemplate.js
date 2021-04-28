const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


function webpageTemplate(name, id, email, officeNumber) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    
    <body>
        <div class="jumbotron d-flex justify-content-center text-info bg-dark">
            <h1 class="display-4">My Team</h1>
        </div>
        <div class="d-flex flex-wrap justify-content-center">
            <div class="card mb-3 border-1 border-info rounded manager m-1 p-0" style="max-width: 18rem;">
                <div class="card-header text-info bg-dark bold">
                    <h4 class="card-title job">Manager</h4>
                    <h5 class="card-title name">${name}</h5>
                </div>
                <div class="card-body text-info bg-light">
                    <ul class="card-text p-0">
                        <li class="card-text list-group-item">ID: ${id}</li>
                        <li class="card-text list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="card-text list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div> 
    </body>
    
    </html>`;
}

// function engineerCard(name, id, email, github) {
//     return `<div class="card mb-3 border-1 border-info rounded engineer m-1 p-0" style="max-width: 18rem;">
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
//     </div>`
// }

// function internCard(name, id, email, school) {
//     return `<div class="card mb-3 border-1 border-info rounded intern m-1 p-0" style="max-width: 18rem;">
// <div class="card-header text-info bg-dark bold">
//     <h4 class="card-title job">Intern</h4>
//     <h5 class="card-title name">${name}</h5>
// </div>
// <div class="card-body text-info bg-light">
//     <ul class="card-text">
//         <li>ID: ${id}</li>
//         <li>Email: <a href="mailto:${email}">${email}</a></li>
//         <li>School: ${school}</li>
//     </ul>
// </div>
// </div>`
// }

module.exports = webpageTemplate;
