console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.cwd());
console.log(process.memoryUsage());
console.log(process.uptime());
setInterval(function () {
    console.log(process.uptime());
}, 1000);
// process.exit();

console.log(__dirname);
console.log(__filename);