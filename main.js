
function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}


function isLegalKey(key, val, pos) {
  // 过滤非法字符
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(key)) {
    return false;
  }

  // 合法字符：. 小数点
  if(key === '.') {
    // 规则：小数点不能出现在数字的首位
    if(pos === 0) 
      return false;

    // 规则：小数点不能出现在小数中
    if(val.indexOf('.') !== -1)
      return false;

    // 规则：小数点不能出现在负号以及 e 或 E 后面
    if(pos > 0 && /[-eE]/.test(val.slice(0, pos))) 
        return false;
  }

  // 合法字符：e 和 E 科学计数法指数符号
  if(key === 'e' || key === 'E') {
    // 规则：e 和 E 不能出现在数字的首位
    if(pos === 0) 
      return false;

    // 规则：e 和 E 不能出现在科学计数法的数字中
    if(val.indexOf('e') !== -1 || val.indexOf('E') !== -1) 
      return false;

    // 规则：e 和 E 不能出现在负号和小数点后面
    if(pos > 0 && /[-.]/.test(val.slice(pos - 1, pos))) 
      return false;

    // 规则：e 和 E 不能出现在小数点前面
    if(val.slice(pos,val.length).indexOf('.') !== -1) 
      return false;
  }

  // 合法字符：- 负号
  if(key === '-') {
    // 规则：负号不能出现在数字的首位
    if(pos === 0) 
      return false;

    // 规则：负号不能出现在数字和小数点后面
    if(pos > 0 && /[0-9.]/.test(val.slice(pos -1, pos))) 
      return false;

    // 规则：负号不能重复出现
    if(pos > 0 && val.indexOf('-') !== -1) 
      return false;
  }
  return true;
}

$(() => {
  //window.alert('rectangle');
  
  // get dom elem
  let $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calc'),
      $form = $('#main'),
      $perimeter = $('#perimeter'),
      $widthvalidate=$('#width-validate'),
      $heightvalidate=$('#height-validate'),
      $area = $('#area');

 $forkMeGH.show("https://baidu.com/");
 $bszPageFooter.show("body"),
//字符级
$width.keypress((e)=>{
  let key = e.key,
      val = e.target.value,
      pos = e.target.selectionStart;
  console.log(key,val,pos);//位置
  //合法字符规则
  //合法字符 e
  //在一个科学计数法的数值前面、中间、后面都不能再出现e  
  //小数点
  if(!isLegalKey(key, val, pos)) {
      e.preventDefault();
  }
}),

$height.keypress((function(e) {
    let key = e.key,
      val = e.target.value,
      pos = e.target.selectionStart;
    if(!isLegalKey(key, val, pos)) {
      e.preventDefault();
    }}
)),


/* 
  多个字段
$form.focusout((e)=>{
  console.log(e.target.value);
})
*/

 //字段验证
$width.focusout(()=>{
  console.log($width.val())
  if(!validate($width,$widthvalidate)){
    $width.select();
  }
});

$height.focusout(()=>{
  if(!validate($height,$heightvalidate)){
    $height.select();
  }
});

  /* calc button click */
  $btnCal.click(() => {
    let w = Number($width.val());
    let h = Number($height.val());

    //validate
    if(validate($width,$widthvalidate)&& validate($height,$heightvalidate)){
      // get value 
          //calc
          let b = roundFractional(2*(w+h),2),
              a =roundFractional (w * h,2);
        
          //output
          $perimeter.val(b);
          $area.val(a);      
    }
    
  });  
});

function validate(input,output){
  //is empty
  if(input.val() === ''){
    output.html("该字段不能为空");
    return false;
  }else{
    output.html('');
  }

  //is number
  let val = Number(input.val());
  
  if(isNaN(val)){
   output.html("该字段应该为数值");
    return false;
   }else{
    output.html('');
   }

  //is +
  if(val<0){
    output.html("该数值不能小于0");
      return false;
  }else{
    output.html('');
  }

  

  return true;
}
