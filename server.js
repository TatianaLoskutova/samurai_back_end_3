const http = require('http')
const fs = require('fs')

const server = http.createServer(async (request, response)=> {
    switch (request.url){
        case '/home':...
        case '/about':...
        case '/api tables':...
        case '/api users':...
        case '/api account':...
        case '/api comment':...
        case '/api feedback':...{
            response.statusCode = 400
            response.setHeader('Content-type', 'application/json');
            response.end(JSON.stringify({error: 'incorrect text length'}));
            break;
        }
        default: {
            //response.write('404 not found')
            response.end()
        }
    }
})
server.listen(3003)