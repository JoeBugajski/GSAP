$(window).load(function(){
    init();
});

// This function doesn't use jquery syntax! 

function init(){
    // normal TimelineMax timeline
    var toolTimeline = new TimelineMax(); 
    //duration of animation
    var duration = 1;  
    // Here we see a simplified syntax 
    // for adding a Tween that is availabe 
    // with TweenMax
    
    toolTimeline.from('.superman img', duration, { scale: 1, left: 0, rotationY: 2160, ease:Back.ease}); 
    toolTimeline.from('.superman img', duration, { scale: .5, rotationX: 2160, ease:Back.ease}, .8); 

    // TweenLite syntax: 
    // toolTimeline.add(TweenLite.to('#toolBox', duration, {y:-100, ease:Linear.easeInOut}));
}