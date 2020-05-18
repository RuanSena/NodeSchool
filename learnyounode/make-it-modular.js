const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], (err, data) => {
    if (err) return console.log(err);
    data.forEach(file => console.log(file));
});