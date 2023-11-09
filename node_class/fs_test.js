const fs = require('fs');

fs.readFile('./process_test.js', function(err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});

fs.writeFile('./test1.txt', '말랑해집시다\n다들힘내.', function(err) {
    if (err)
        throw err;
    console.log('파일 쓰기에 성공했습니다.');

});

fs.readFile('./test1.txt', function(err, data) {
    if (err)
        throw err;
    console.log(data.toString());
})