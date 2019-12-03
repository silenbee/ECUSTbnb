var express=require('express');
var app = express();
var swig = require('swig');

app.engine('html', swig.renderFile);

// view engine setup
app.set('views', './');
app.set('view engine', 'html');
app.set('view options', {layout: false});

app.use(express.json());


app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




app.listen(3000);
