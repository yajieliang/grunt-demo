const expect = require('chai').expect,
      http   = require('http');

describe('矩形计算器 HTTP API 接口测试',()=> {
  it('rect(20,30)=>{area:600,per:100}', ()=>{
    http.get('http://localhost:8080/rectangle/?width=20&height=30', (res)=>{
      let result = '',
            r = null;

      res.on('data', (chunk) => result += chunk);
      res.on('end', () =>{
        r = JSON.parse(result);
        expect(r.area).to.be.equal(600);
        expect(r.perimeter).to.be.equal(100);
      })
    });
  });
});
