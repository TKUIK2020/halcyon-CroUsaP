require("http").createServer((req, res) => {
    let file = req.url.substr(1)
    let ext = file.split('.')[1]
    console.log(`Запрашиваемый url: ${req.url}`)
    require('fs').readFile(file, (err, oFile) => {
        if (err) {
            res.statusCode = 404;
            let html = `
            <!DOCTYPE html>
            <html lang="ru">
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <h1>Привет Мир!</h1>
            </body>
            
            </html>`
            res.end(html)
        } else {
            res.setHeader("Content-Type", "image/jpeg")
            res.end(oFile)
            res.statusCode = 200;
        }
        res.end(oFile)
    })
}).listen(3000, () => console.log("Server is on"));