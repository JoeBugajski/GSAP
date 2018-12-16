$(document).ready(function(){
    init();
});


function init(){
    var toolTimeline = new TimelineLite();
    var duration = .5;
    toolTimeline.to('#toolBox', duration, {y: 600, ease:Linear.easeInOut});
    toolTimeline.to('#weightLifter', duration, {y: 600, ease:Bounce.easeInOut});
    toolTimeline.to('#crazy', duration, {y: 600, ease:Elastic.easeInOut});
    toolTimeline.to('#leaf', duration, {y: 600, ease:Back.easeInOut});

}