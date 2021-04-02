let expect = chai.expect;

describe('矩形面积函数的测试',function(){
  it('area(10,5)=50',function(){
    let r = rectangle();
    expect(r.area(10,5)).to.be.equal(50);
  });
});

describe('矩形周长方法的单元测试',function(){
  it('perimeter(10,5)=30',function(){
    let r = rectangle();
    expect(r.perimeter(10,5)).to.be.equal(30);
  });
});
