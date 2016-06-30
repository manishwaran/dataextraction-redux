var healthCheck = require('connect-health-check');
var express = require('express');
var app = express();
var healthCheck = require('connect-health-check');
var bodyParser = require('body-parser'),
	request=require('request'),
	tempResp = "",
	cheerio = require('cheerio');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(healthCheck)
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html")
});

app.post('/loadwebpage', function(req, res){
	console.log(req.body)
	tempResp=""
	var url=req.body.url
	console.log(url);
	if(url){
		var options = {
			url : url,
			headers : {"User-Agent" : "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/50.0.2661.102 Chrome/50.0.2661.102 Safari/537.36"}
		}
		request(options,function(err,reqst,response){
			tempResp = response;
			res.send(response)
			res.end();
		});

	}
	else{
		console.log("data not fetched")
		res.end("data not fetched");
	}
});

app.post('/getresult',function(req,res){
	console.log(req.body)
	console.log(JSON.parse(req.body))
	var runJson = JSON.parse(req.body),
		resultJson = [],
		$ = cheerio.load(tempResp);
	runJson.data.forEach(function(item,index){
		var obj = {};
		obj.id=item.id;
		obj.val=$(item.css).text();
		resultJson.push(obj);
	})
	console.log("result sent "+resultJson);
	res.json(resultJson);

})

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});
