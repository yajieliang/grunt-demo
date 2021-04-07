const add = require('../add.js'),
      expect = require('chai').expect;
/*
describe('加法函数的单元测试',()=>{
  //测试用例
  it('0+0=0',()=>{
    expect(add(0,0)).to.be.equal(0);
  });
  it('1+a=NaN',()=>{
    expect(isNaN(add(1,'a'))).to.be.ok;
  });
})
*/

describe('加法函数的动态测试',()=>{
 let data=[{
    input:[0,0],
    output:0
  },{
    input:[1,1],
    output:2
  },{
    input:[1,2e3],
    output:NaN
  }];
  data.forEach((item)=>{
    it(`${item.input[0]}+${item.input[1]}= ${item.output}`,()=>{
      expect(add(item.input[0],item.input[1])).to.be.equal(item.output);
    });
  });
});

