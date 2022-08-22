var http=require("http");
var data="100"
var options={
    hostname:'localhost',
    port:5000,
    headers:{
        'Content-Type':'text.html',
        'Content-length': data.length
    }
}

var req=http.request(options,function(res){
    // console.log(res.statusCode)
    res.on('data',d=>{
        process.stdout.write("Discount Price: ")
        process.stdout.write(d)
    })
})
req.write(data)