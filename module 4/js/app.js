$(document).ready(function(){
    init();
});

// This function doesn't use jquery syntax! 

function init(){
    // normal TimelineMax timeline
    var toolTimeline = new TimelineMax(); 
    //duration of animation
    var duration = .5;  
    // Here we see a simplified syntax 
    // for adding a Tween that is availabe 
    // with TweenMax
    toolTimeline.to('#toolBox', duration, {y: 600, ease:Linear.easeInOut}); 
    toolTimeline.to('#weightLifter', duration, {y: 600, ease:Bounce.easeInOut});
    toolTimeline.to('#crazy', duration, {y: 600, ease:Elastic.easeInOut});
    toolTimeline.to('#leaf', duration, {y: 600, ease:Back.easeInOut});
    // TweenLite syntax: 
    // toolTimeline.add(TweenLite.to('#toolBox', duration, {y:-100, ease:Linear.easeInOut}));
}