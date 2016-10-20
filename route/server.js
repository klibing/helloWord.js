/**
 * Created by libing on 2016/10/20.
 */
var http = require("http");
var url = require("url");
var port = 8888;
function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("访问路径为: " + pathname);
        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("hello libing!!!");
        response.end();
    }

    http.createServer(onRequest).listen(port);
    console.log("访问：http://localhost:" + port);
    console.log("server has bean started");

};
exports.start = start;