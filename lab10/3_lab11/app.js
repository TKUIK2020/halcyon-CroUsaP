const joker = require('random-joke-getter')

require("http").createServer((req, res) => {
    console.log(`Запрашиваемый url: ${req.url}`)
    joker.getProgrammingJoke((joke) => {
        res.end(joke)
    })
}).listen(3000, () => console.log("Server is on"));