const express = requiere('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Intregracion continua funcionando');
});

app.listen(port, () => {
    console.log('Servidor esta ejecutandose en el puerto' + port);
});
