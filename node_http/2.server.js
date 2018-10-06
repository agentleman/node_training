var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req,res){
    var Url = req.url;
    console.log(Url);
    if(Url == '/favicon.ico'){
        res.end(404);
        return;
    }
    if(Url == '/'){
        res.setHeader("content-type","text/html;charset=utf-8");
        fs.readFile('./index.html',function(err,data){
            if(err){
                //end = write+end end方法不能直接接受对象类型的响应体，只能接受字符串或者buffer=
                res.end(err.toString());
            }else{
                res.end(data)
            }
        })
    }else if(Url == '/index.css'){
        res.setHeader("content-type","text/css;charset=utf-8");
        fs.readFile('./index.css',function(err,data){
            if(err){
                //end = write+end end方法不能直接接受对象类型的响应体，只能接受字符串或者buffer
                res.end(err.toString());
            }else{
                res.end(data)
            }
        })
    }

})
server.listen(80);
