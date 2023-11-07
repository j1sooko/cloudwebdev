const path = require('path');
const filename = __filename;
console.log(filename);

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log(__dirname); // 현재 파일이 위치한 폴더의 절대 경로
console.log('path.dirname():', path.dirname(filename)); // 파일의 경로만 빼옴
console.log('path.extname():', path.extname(filename)); // 확장자명
console.log('path.basename():', path.basename(filename));
console.log(
    'path.basename - extname',
    path.basename(filename, path.extname(filename))
);
console.log('path:parse()', path.parse(filename));

const path_info = path.parse(filename);
console.log(path_info.base);
console.log('path:join()', path.join(__dirname, '..', 'nambu'));
console.log('path:resolve()', path.resolve(__dirname, '/womanup', 'nambu'));

console.log(path.posix.sep);
console.log('path.posix.join()', path.posix.join(__dirname, 'nambu'));

console.log(path.win32.sep);
console.log('path.win32.join()', path.win32.join(__dirname, 'nambu'));