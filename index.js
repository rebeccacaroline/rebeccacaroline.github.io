$(document).ready(function(){
  logoShadow();
});

var logoShadow = function(){
  $('.logo').mouseover(function(){
    $(this).css("shadow", "10px 10px 5px #D3D3D3");
  }).mouseout(function(){
    $(this).css("shadow", "0px 0px 0px #D3D3D3");
  })
};


$('.arrow').on('click', function(){
    $('html, body').animate({scrollTop: $('')})
  })