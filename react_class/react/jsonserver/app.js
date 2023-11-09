var fetch = require('node-fetch')

// get
/* fetch('http://localhost:3000/students')
.then((response) => response.json())
.then((data) => console.log(data)); */


//post
/* const body = {
    id:4,
    name:'고지수',
    email:'wltn7234@naver.com'
}

fetch('http://localhost:3000/students', {
    method:'post',
    body:JSON.stringify(body),
    headers:{'Content-Type': 'application/json'}
})
.then((response) => response.json())
.then((data) => console.log(data)); */


// put
/* const body = {
    id:2,
    name:'김덕수',
    email:'dskim@naver.com'
}

fetch('http://localhost:3000/students/2', {
    method:'put',
    body:JSON.stringify(body),
    headers:{'Content-Type': 'application/json'}
})
.then((response) => response.json())
.then((data) => console.log(data)); */


// delete


fetch('http://localhost:3000/students/2', {
    method:'delete'}
)
.then((response) => response.json())
.then((data) => console.log(data));