const funcNames = require('./names.js');
const funcHobbies = require('./hobbies.js');

const retObj = retNamesHobbies();
console.log(retObj);

/******* 
function
*******/

function retNamesHobbies () {

    const objNames = funcNames('mattia', 'zecchinato'); 

    const fullName = `${objNames.firstName} ${objNames.lastName}`;

    const arrayHobbies = funcHobbies('f1', 'pallanuoto', 'leggere');

    const objNamesHobbies = {

        fullName,
        hobbies: {

            hobbiesOne: arrayHobbies[0],
            hobbiesTwo: arrayHobbies[1],
            hobbiesThree: arrayHobbies[2]
        }
    };

    return objNamesHobbies;
}