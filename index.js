const express = require('express')
const app = express()

let max = 1000
let min = 500

const { StreamChat } = require('stream-chat');

// Define values.
const api_key = 'fapgw466me76'
const api_secret = 'wb62f5krjhz9z7uu9vxkjh2fahdhhm3dnjdxwunnna8em652zu8x5cg7ueha9rhy'
const user_id = 'john'

// Initialize a Server Client
const serverClient = StreamChat.getInstance( api_key, api_secret);
// Create User Token
const token = serverClient.createToken(user_id);



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
        data : token,
        result : result
    })
});

app.listen(process.env.PORT || 3000)
