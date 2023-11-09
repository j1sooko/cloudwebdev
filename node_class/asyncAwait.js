async function func1() {
    return 'hello func1';
}

func1().then(console.log);

function func2() {
    return new Promise((resolve) => {
        resolve('hello func2');
    });
}

async function func3() {
    let name = await func1();
    console.log('func3');
    console.log(name);
}

func2().then(console.log);
func3();