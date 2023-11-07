function syncFunc() {
    console.log('동기 작업시작');
    let result = 0;
    for (i = 0; i < 1000000; i++) {
        result += 1;
    }
    console.log(`동기 작업 완료 : ${result}`);
    
}

function asyncFunc() {
    console.log('비동기 작업시작');
    return new Promise((resolve) => {
        let result = 0;
        for (i = 0; i < 1000000; i++) {
            result += 1;
        }
        resolve(result);
    })
    
}

syncFunc();
console.log('다른 작업1');
console.log('다른 작업2');
asyncFunc().then(function (result) {
    console.log(`비동기 작업 완료 : ${result}`);
})
console.log('다른 작업3');
console.log('다른 작업4');