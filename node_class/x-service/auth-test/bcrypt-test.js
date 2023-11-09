const bcrypt = require('bcrypt');
const password = 'pass1234';
const saltAround = 10; // 너무 크면 처리 시간이 기하급수적으로 커질 수 있으니 유의
 
let hashed = bcrypt.hashSync(password, saltAround);
console.log(`${password} : ${hashed}`);

let result = bcrypt.compareSync(password, hashed);
console.log(result);

const hash_test = (async () => {
    let hashed = bcrypt.hashSync(password, saltAround);
    console.log(`${password} : ${hashed}`);

    let result = bcrypt.compareSync(password, hashed);
    console.log(result); 
});

hash_test();