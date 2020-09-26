const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Thank you for calling me amjad 2200");
})

app.listen(2200, () => console.log("Listenting to port 2200"));