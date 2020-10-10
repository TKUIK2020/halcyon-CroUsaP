require('http').createServer((req, resp) => {
    var html = `<!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <h1>Привет Мир!</h1>
    </body>
    </html>`;

    resp.write(html, 'utf8');
    resp.end();
}).listen(3000)