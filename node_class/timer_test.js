const timer3 = setTimeout(function() {
    console.log('5초 경과 후 한번 실행');
}, 5000);

const timer = setTimeout(function() {
    console.log('2.5초 경과 후 한번 실행');
}, 2500);

const interval = setInterval(function() {
    console.log('1초마다 실행');
}, 1000);

// 1초가 되기 전에 실행이 다 끝나버림
// clearTimeout(timer)
// clearInterval(interval)
// clearTimeout(timer3)

setTimeout(function() {
    clearTimeout(timer)
    clearInterval(interval)
    clearTimeout(timer3)
}, 3500)

setImmediate(function() {
    console.log('즉시실행')
})