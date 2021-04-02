function add(x,y){
  let a = Number(x),
      b = Number(y);
  if(isNaN(a) || isNaN(b)){
    return NaN;
  }else{
    return a+b;
  }
}
module.exports = add;
