const app = require('express')();
const port = 8000;

app.get('/', (req, res) =>{
    res.send('hello client');
})

app.listen(port);



