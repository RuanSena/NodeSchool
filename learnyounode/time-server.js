const net = require('net');
const PORT = process.argv[2];

const cnx = net.createServer(socket => {
    // socket é a conexao i/o que streama dados para escrever ou serem lidos, contendo tambem varios meta-dados 
    let d = new Date();
    let data = {
        ano: d.getFullYear(),
        mes: (d.getMonth()+1).toString().padStart(2, '0'),
        dia: (d.getDate()).toString().padStart(2, '0'),
        hora: (d.getHours()).toString().padStart(2, '0'),
        min: (d.getMinutes()).toString().padStart(2, '0')
    }
    let data_formatada = `${data.ano}-${data.mes}-${data.dia} ${data.hora}:${data.min}`
    socket.end(data_formatada+'\n');
})

cnx.listen(PORT);