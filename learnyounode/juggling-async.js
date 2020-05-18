const http = require('http');
const urls = process.argv.slice(2);

function getData(url) {
    let output;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            res.setEncoding('utf8');
            res.on('error', reject);
            res.on('data', data => {
                output = output ? output + data : data;
            });
            res.on('end', () => {
                resolve(output);
            });
        })
    })
}
(async () => {
    for (let i = 0; i < urls.length; i++) {
        await getData(urls[i]).then(console.log)
    }
})()
    