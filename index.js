const app = require('express')();
const port = 8000;

app.get('/', (req, res) =>{
    res.send('hello client');
})

app.get('/test', (req, res) =>{
    res.send('success');
})

app.get('/names', (req, res) =>{
    const names = ['Beau', 'Peterson', 'Colt', 'Rooster', 'Hank'];
    res.send(names);
})

app.get('/numbers', (req, res) =>{
    const numbers = [];

    for(let i=0; i<10; i++){
        numbers.push(Math.floor(Math.random() * 10));
    }

    res.send(numbers);
})

app.get('/randomNumber', (req, res) =>{
    const numbers = [];

    for(let i=0; i<10; i++){
        numbers.push(Math.floor(Math.random() * 100));
    }

    let highestNumber = numbers[0];

    numbers.forEach(number => {
        if(number > highestNumber) highestNumber = number;
    })

    res.send(`${numbers} - highest number - ${highestNumber}`);
})

app.get('/numbers/:index', (req, res) => {
    const numbers = [];

    for(let i=0; i<10; i++){
        numbers.push(Math.floor(Math.random() * 100));
    }

    res.send(`${numbers} , output - ${numbers[req.params.index]}`);
})

app.listen(port);



