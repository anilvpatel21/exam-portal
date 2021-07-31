const express = require('express');
const app = express();


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})


app.use('/v1', (req,res,next) => {
    res.send({data: 'Hello Green'});
})

app.use('/green', (req,res,next) => {
    res.send({data: 'Hello Green'});
})

app.use('/red', (req,res,next) => {
    res.send({data: 'Hello Red'});
})

app.get('/', function(request,response) {
    response.send({data: 'Hello World'});
 });

app.get('/alltests', function(request,response) {
   response.status(200).send([
    {
      "testName": "Calculus Test",
      "noOfQuestions": 20,
      "time": '30 min'
    },
    {
      "testName": "Average Test",
      "noOfQuestions": 20,
      "time": '30 min'
    },
    {
      "testName": "Chain Rule Test",
      "noOfQuestions": 20,
      "time": '30 min'
    }
  ]);
});


app.get('/sandwich', function(request,response) {
    response.send({ data: 'sandwich is ready'});
});


//port number --- kitchen ki khidhki //services running on theat port nubmer
app.listen(8080, function() {
    console.log('Kitchen is opened');
})

