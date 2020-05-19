const through = require('through2')
count = 0
const stream = through((line, enc, cb) => {
    line = (count % 2) == 0 ?  line.toString().toLowerCase() : line.toString().toUpperCase()
    count++
    cb(null, line)
})
process.stdin.pipe(stream).pipe(process.stdout)