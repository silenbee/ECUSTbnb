/**
 * 应用程序入口
 */
let fs = require('fs');
let express = require('express');
// 创建app应用
let app = express();
// 加载模板处理模块
let swig = require('swig');
/*let query = require('./lib/poolQuery.js')*/
let bodyParser = require('body-parser');
/*let phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;*/
// 创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({ extended: false })
/*const formidable = require('formidable');*/
let path = require('path');
app.use(bodyParser.json());
app.use('/static', express.static('static'));


app.engine('html', swig.renderFile);

app.set('views', './');
app.set('view engine', 'html');
app.set('view options', {layout: false});
app.use(express.static(path.join(__dirname, 'views')));
swig.setDefaults({cache: false});

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

/*
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})*/
app.get('/', function (req, res, next) {
    res.render('index');
})
app.listen(8080, function () {
    console.log('http://127.0.0.1:8080');
})
