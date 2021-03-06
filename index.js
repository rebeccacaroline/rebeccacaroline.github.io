$(document).ready(function(){
  logoShadow();
  // Localize.setLanguage('en');
  githubLink();
  projectLink();
  // whoSaysDrewSaysLink();
  flipDiv();
  downArrow();
});

var logoShadow = function(){
  $('.logo').mouseover(function(){
    $(this).css("shadow", "10px 10px 5px #D3D3D3");
  }).mouseout(function(){
    $(this).css("shadow", "0px 0px 0px #D3D3D3");
  })
};

var downArrow = function(){
  $('.arrow').on('click', function(){
    $('html,body').animate({scrollTop: $('.fusion').offset().top}, 5000);
  });
};

var githubLink = function(){
  $('.git').on('click', function(event){
    event.preventDefault();
    window.location = $(this).attr("href");
    return false;
  });
};

var projectLink = function(){
  $('.project-box').on('click', function(){

    var projectLink = $(this).find("a");

    projectLink.attr("target", "_blank");
    window.open(projectLink.attr("href"));

    return false;
  });
};

// var whoSaysDrewSaysLink = function(){
//   $('.whosaysdrewsays').on('click', function(){
//     window.location = $(this).find("a").attr("href");
//     return false;
//   });
// };

var flipDiv = function(){
  $('.hover').hover(function(){
    $(this).addClass('flip');
  }, function(){
    $(this).removeClass('flip');
  });


}

