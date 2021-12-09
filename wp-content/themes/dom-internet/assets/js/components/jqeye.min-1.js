var mouseX = 0, mouseY = 0, limitX = 150-15, limitY = 150-15;
$('.follower-container').mousemove(function(e){
  var offset = $(this).offset()
   mouseX = Math.min(e.pageX - offset.left, limitX);
   mouseY = Math.min(e.pageY - offset.top, limitY);
   if (mouseX < 0) mouseX = 0;
   if (mouseY < 0) mouseY = 0;
});

// cache the selector
var follower = $(".follower");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp);
    yp += (mouseY - yp) ;
    follower.css({left:xp, top:yp});
    
}, 30);