const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get("/users", (req,res) => {

    const number = Number(req.query.number);
    var result = "";


    if (number > max) {
        result = "Pass"
    } else if (number < min) {
        result = "Fail"
    } else {
        result = "Average"
    }


    return res.json({
        status : 1,
        data : "token",
        result : result
    })
});

app.listen(process.env.PORT || 3000)
