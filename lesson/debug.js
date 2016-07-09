//用来写日志的  引入日志模块
var debug = require('debug');
//创建一个日志记录起，接受一个名字作为参数
var server =debug('server');
//只有环境变量中的debug的值和日志记录中的值相同的时候才会输出
//输出日志
server('server log');











