const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser.json())

   //GET

const users = ["amjad", "aziz", "essa", "rahul", "tapim"]

app.get('/', (req, res) => {
    const fruit = {
        product: 'apple',
        price: 10   
    };
    res.send(fruit);
})
app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'banana', quantity: 1000, price:10000});
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id, name})
})

    //POST 

    app.post('/addUser', (req, res) => {
        //save to database
        const user = req.body;
        user.id = 10;
        res.send(user);
    })

app.listen(4000, () => console.log("Listenting to port 4000"));