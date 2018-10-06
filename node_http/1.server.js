var http = require('http');
//监听函数
var serve = function (req,res){
    res.setHeader("content-type","text/html;charset=utf-8");
    res.write('当前时间');
    res.write(new Date().toLocaleString());
    res.end()//服务器相应结束
}
var server = http.createServer(serve);
server.listen(80,'127.0.0.1');
