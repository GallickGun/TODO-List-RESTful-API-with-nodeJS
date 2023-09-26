import http from "http"

const server = http.createServer((request, response) => {
    response.write("TODOList API");
    response.end();
})

server.listen(3000)