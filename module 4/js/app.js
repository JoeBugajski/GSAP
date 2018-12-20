$(window).load(function(){
    init();
});

// This function doesn't use jquery syntax! 

function init(){
    // normal TimelineMax timeline
    var toolTimeline = new TimelineMax(); 
    //duration of animation
    var duration = .6;  
    // Here we see a simplified syntax 
    // for adding a Tween that is availabe 
    // with TweenMax
    toolTimeline.from('.mainTitle', duration, {scale:25, ease:Linear.easeInOut}); 
   
    toolTimeline.from('.title', duration, {opacity: 0, scale: 25, ease:Linear.easeInOut}, .2);
  
    toolTimeline.to('.superman img', duration, {scale: 1.5, left: 0, ease:Back.easeOut}); 
    toolTimeline.from('.superman img', duration, {scale: .5, skewX: '20deg', ease:Back.easeOut}, .9); 

    toolTimeline.to('.mainTitle', duration, {right: -90, ease:Back.easeInOut}, .7);

    toolTimeline.staggerTo('.tools', duration, {top: 30, ease:Back.easeInOut}, 1.2, 1.7)

    // TweenLite syntax: 
    // toolTimeline.add(TweenLite.to('#toolBox', duration, {y:-100, ease:Linear.easeInOut}));
}