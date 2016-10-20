/**
 * Created by libing on 2016/10/20.
 */
var server = require("../route/server");
var router = require("../route/router");

server.start(router.route);

console.log("启动完成");