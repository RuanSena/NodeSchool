// let text = ''
// process.stdin.on('data', (data) => {
//     text += data
// }).on('end', () => {process.stdout.write(text.split('').reverse().join(''))})

const concat = require('concat-stream')
process.stdin.pipe(concat(text => {process.stdout.write(text.toString().split('').reverse().join(''))}))