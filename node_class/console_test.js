globalThis.console.log('Hello node!');
console.info('Hello Info');
console.warn('Hello warn');
console.error('Hello error');


console.time()
for (let i = 0; i < 1000000; i++) {}
console.timeEnd();

console.time('p1')
for (let i = 0; i < 1000000; i++) {}
console.time('p2')
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('p2');
console.timeEnd('p1');

const person = {
    name: '유길채',
    age: 18,
    height: 165.3
};

console.log(
    '이름은 %s, 나이는 %d살, 키는 %f, 객체는 %o',
    person.name,
    person.age,
    person.height,
    person
)

console.table([person, person]);
console.dir(person);
console.dir(console);
console.log(console);

