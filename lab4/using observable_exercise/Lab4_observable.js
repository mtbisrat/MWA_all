 const http = require('http');
const url = require('url');
const fs = require('fs');
const queryString = require('querystring');
const Rx = require('rx');



function onReq(req, res){ 
    if(req.url != "/favicon.ico"){ 
        const subject = new Rx.Subject();   
        const sub = subject.subscribe(readFile, readError, readComplete);

        const urlStr = req.url;
        const pathname = url.parse(urlStr).pathname;
        const query = url.parse(urlStr).query;
        const URL = queryString.parse(query)['url'];
        res.writeHead(200, { 'Content-Type' : 'text/plain' });
        var txt = fs.readFile(URL, function(err, data){
            if(data){
                subject.onNext({ res: res, urlStr: urlStr, fdata: data });
                subject.onCompleted();
            }
            else {
                subject.onError({urlStr: urlStr, res: res, error: "404 File Not Found"});
            }
        });
        //sub.unsubscribe();
    }    
}

function readFile(data){
    console.log(data.urlStr);
    data.res.end(data.fdata); 
}
function readError(err){
    console.log(err.urlStr); 
    console.log(err.error);  
    err.res.end(err.error);
}
function readComplete(data){
    console.log("File retrieved successfully");
}
http.createServer(onReq).listen(8888, 'localhost');
// we can listen on the browser using localhost:8888/?url=commentSuggestion.txt