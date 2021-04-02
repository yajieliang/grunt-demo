const add = require('../add.js'),
      expect = require('chai').expect;

describe('加法函数的单元测试',()=>{
  //测试用例
  it('0+0=0',()=>{
    expect(add(0,0)).to.be.equal(0);
  });
  it('1+a=NaN',()=>{
    expect(isNaN(add(1,'a'))).to.be.ok;
  });
})
