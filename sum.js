#!/usr/bin/node
//node ./sum.js 3 4
if(process.argv.length != 4){
  console.log('sum x y');
  process.exit(1);
}

var x = process.argv[2],
    y = process.argv[3];

const add = require('./add.js');
console.log(`${x} + ${y} = ${add(x,y)}`);
