const DB = [];

function saveDB(user) {
    const oldDBLength = DB.length;
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve, reject) => {
        if (DB.length > oldDBLength) {
            resolve(user);
        } else {
            reject(new Error('Save DB Error'));
        }
    });
}

const person = { name: '우영우', email:'a@a.com' };

function func1(user) {
    console.log(user.name);
}

// saveDB(person).then(func1);

function sendEmail(user) {
    console.log(`send email to ${user.name}`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function getResult(user) {
    return new Promise((resolve) => {
        resolve(`success register ${user.name}`);
    });
}

function registerByPromise(user) {
    const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error))
    .finally(() => console.log('완료'));
    console.log(result);
    return result;
}

const result = registerByPromise(person);
result.then(console.log);