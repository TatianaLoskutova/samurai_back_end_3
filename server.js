const http = require('http')
const fs = require('fs') // чтобы прога читала другой файл, подкулючаем модул fs = file system

const server = http.createServer(async (request, response) => {
    switch (request.url) {
        case '/home': {
            try {
                const data = await readFile('pages/about.html')
                response.write(data)
                response.end()
            } catch (err) {
                response.write('something wrong, 500')
                response.end()
            }
            break;
        }  // (err -если все плохо будет ошибка, если ок, то data)
        case '/about': {
            await delay(3000)
            response.write('About course')
            response.end()
            break;
        }
        default: {
            response.write('404 not found')
            response.end()
        }
    }
})

server.listen(3003)