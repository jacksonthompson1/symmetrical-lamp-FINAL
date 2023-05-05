$(function(){
    $('#console-box').append('console is ready...');
    
    $('li').click(function(){
      $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
      $(this).toggleClass('selected').siblings().removeClass('selected');
  ; 
    });
    
  });