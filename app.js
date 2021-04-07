#!/usr/bin/node

const http = require('http'),
      url  = require('url'),
      qs   = require('querystring'),
      log  = console.log;

http.createServer((req, res) => {
  console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  console.log(req.headers);
  console.log();

  let rect = qs.parse(url.parse(req.url).query);

  let r = {
     'area': Number(rect.width) * Number(rect.height),
     'perimeter': 2 * (Number(rect.width) + Number(rect.height))
  }
 log(r);
  res.end(JSON.stringify(r));
}).listen(8080);
