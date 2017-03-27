function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu-items") {
        x.className += " responsive";
    } else {
        x.className = "menu-items";
    }
}

var iframe = document.getElementById('video');

var player = $f(iframe);

$(".play-button").click(function(){
  player.api("play");
});

$(".close").click(function(){
  player.api("unload");
});

$(document).ready(function() {
  $(".play-button").click(function(){
      $(".video-overlay").addClass("play");
  });
  $(".close").click(function(){
      $(".video-overlay").removeClass("play");
  });
});


console.log("%cSUPER GREEN! 〠", "color:#33cc33; font-size:60px; font-family: arial; font-weight: bold;");
console.log("%cWe are always open-minded to new talent, and hungry for highly motivated people to join our team.", "color:black; font-size:120px; font-family: arial; font-weight: bold;");
console.log("%cJOIN USSSSS -> %chttps://muxumuxu.com/careers/", "color:black; font-size:30px; font-family: arial; font-weight: bold;", "color:blue; font-size:30px; font-family: arial; font-weight: bold;");
