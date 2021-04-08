$(function(){
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

  /* calc button click hh */
  $btnCal.click(() => {
    let w = Number($width.val());

    let h = Number($height.val());
     
    var rect = rectangle();
          //output
          $perimeter.val(rect.perimeter(w,h));
          $area.val(rect.area(w,h));      
    
  });  
});

