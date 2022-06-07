var express = require('express');
var app = express();

const client_id = "Rq8gv_hXQgJA56hdd7tL";
const client_secret = "uiieuA1ni1";


app.get('/search/news', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var api_url = 'https://openapi.naver.com/v1/search/news?display=15&sort=sim&query=' + encodeURI(req.query.query); // json 결과
    var request = require('request');
    var options = {
        url: api_url,
        headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

app.get('/trend', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var api_url = 'https://www.bigkinds.or.kr/api/categoryKeywords.do' // json 결과
    var request = require('request');
    var options = {
        url: api_url
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});