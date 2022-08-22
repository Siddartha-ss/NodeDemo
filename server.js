var http = require("http")

var server = http.createServer((req,res)=>{
    console.log("Server Started")
    res.writeHead(200,{'Content-Type':'text/html'})
    req.on('data',d=>{
        process.stdout.write("Received price: ")
        process.stdout.write(d)
        res.write(String(parseInt(d)-(parseInt(d)*0.1)))
        res.end()
    })
})
server.listen(5000)