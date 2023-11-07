const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secret = process.env.JWT_SECRET || "secret";

const token = jwt.sign({ id: "jisoo", lv1: 3 }, secret, { expiresIn: 10000 });
const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imppc29vIiwibHYxIjoxLCJpYXQiOjE2OTkyNTIzNTF9.E8RCObRBmRf-5u2sMvUb-iZJTXaNNzmL2tnaNkb4R4I'
console.log(token);

jwt.verify(token, secret, (error, decoded) => {
    console.log(decoded)
});

jwt.verify(token1, secret, (error, decoded) => {
    if (error) { 
        console.log(error)
    } else {
        console.log(decoded);
    }
});