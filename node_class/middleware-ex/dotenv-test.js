const dotenv = require('dotenv');
// 실행시 현재폴더의 .env 파일을 읽어 process.env에 설정
dotenv.config();
//.env가 다른 경로에 있을 때는 path 옵션으로 넘기면 됨
// dotenv.config({  path: './path/.env' });
console.log(process.env.COOKIE_SECRET);
console.log(process.env.DB_PASSWORD);
console.log(process.env.PORTX);