$(document).ready(function(){
  logoShadow();
  Localize.setLanguage('en');
  lifeTimeLink();
  whoSaysDrewSaysLink();
});

var logoShadow = function(){
  $('.logo').mouseover(function(){
    $(this).css("shadow", "10px 10px 5px #D3D3D3");
  }).mouseout(function(){
    $(this).css("shadow", "0px 0px 0px #D3D3D3");
  })
};


// $('.arrow').on('click', function(){
//     $('html, body').animate({scrollTop: $('')})
//   })

var lifeTimeLink = function(){
  $('.lifetime').on('click', function(){
    window.location = $(this).find("a").attr("href");
    return false;
  });
};

var whoSaysDrewSaysLink = function(){
  $('.whosaysdrewsays').on('click', function(){
    window.location = $(this).find("a").attr("href");
    return false;
  });
};


