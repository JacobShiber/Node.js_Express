const app = require('express')();
const port = 8000;

app.get('/', (req, res) =>{
    res.send('hello client');
})

app.get('/test', (req, res) =>{
    res.send('success');
})

//gets names array
app.get('/names', (req, res) =>{
    const names = ['Beau', 'Peterson', 'Colt', 'Rooster', 'Hank'];
    res.send(names);
})

//gets number array
app.get('/numbers', (req, res) =>{
    const numbers = [];

    for(let i=0; i<10; i++){
        numbers.push(Math.floor(Math.random() * 10));
    }

    res.send(numbers);
})

//gets the highest number in the random array 
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


//gets the number in the array from the given index
app.get('/numbers/:index', (req, res) => {
    const numbers = [];

    for(let i=0; i<10; i++){
        numbers.push(Math.floor(Math.random() * 100));
    }

    res.send(`${numbers} , output - ${numbers[req.params.index]}`);
})


//checks if the given number exist in the array
app.get('/isNumber/:num', (req, res) => {
    const numbers = [];

    for(let i=0; i<10; i++){
        numbers.push(Math.floor(Math.random() * 10));
    }

    let response = false;

    numbers.forEach(number => {
        if(number == req.params.num) response = true ;
    })

    if(response == true){
        res.send(`${req.params.num} exists in the array`);
    }
    else {
        res.send(`the given number dont exist in the array. \n the array - ${numbers} given number - ${req.params.num}`)
    }
})

//checks if the given number is bigger than the random num and return the heighst number
app.get('/bigNumber/:num', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 10);

    let winner = 0;

    if(randomNumber > req.params.num) {winner = randomNumber}
    else winner = req.params.num;

    res.send(`winner - ${winner}`);
})

//checks if the given number is bigger than the random num and return the smallest number
app.get('/smallNumber/:num', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 99);

    let winner = 0;

    if(randomNumber < req.params.num) {winner = randomNumber}
    else winner = req.params.num;

    res.send(`winner - ${winner}`);
})

app.listen(port);



