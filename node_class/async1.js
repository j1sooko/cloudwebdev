const DB = [];

const person = {name: '홍길동', email: 'a@a.com'};
function saveDB(user, callback) {
    DB.push(user);
    console.log(`save ${user.name}`);
    callback(user);
}

function sendEmail(user, callback) {
    console.log(`send email to ${user.email}`);
    callback(user);
}

function getResult(user) {
    return `success register ${user.name}`;
}

function register(user) {
    return saveDB(user, (user) => {
        return sendEmail(user, (user) => {
            return getResult(user);
        });
    });
}

const result = register(person);
console.log(result);

// saveDB(user, (user)=>{
//     console.log(user.name);
// });


// function func1(user) {
//     console.log(user.name);
// }

// saveDB(user, func1);

// saveDB(user, function func1(user) {
//         console.log(user.name);
// });
