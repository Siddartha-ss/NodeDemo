var items=require('./itemarray.js')

var http = require('http')

var server=http.createServer(function(req,res){
    console.log(req.url)
    if(req.url=='/getitem'){
        res.write(JSON.stringify(items.items))
        res.end()
    }
    else{
        res.write("Requested URL not found")
        res.end()
    }
})

server.listen(5000,function(){
    console.log("Server Started")
})