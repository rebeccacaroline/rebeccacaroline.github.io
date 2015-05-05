$(document).ready(function(){
  logoShadow();
  Localize.setLanguage('en');
  lifeTimeLink();
  whoSaysDrewSaysLink();
  flipDiv();
});

var logoShadow = function(){
  $('.logo').mouseover(function(){
    $(this).css("shadow", "10px 10px 5px #D3D3D3");
  }).mouseout(function(){
    $(this).css("shadow", "0px 0px 0px #D3D3D3");
  })
};


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

var flipDiv = function(){
  $('.hover').hover(function(){
    $(this).addClass('flip');
  }, function(){
    $(this).removeClass('flip');
  });
}

