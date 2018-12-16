document.addEventListener("DOMContentLoaded", function(){
  startTween();
})

function startTween() {
  let d = 1;

  TweenLite.to($('#weightLifter'), 3, {x: 100, y: 630, scale: 3, rotationX: 180, onComplete:returnWeightLifter})

  TweenLite.to($("#toolBox"), 1, { delay: d, x: 290, y: 190, scale: 1.2, rotation: 360, onComplete:returnToNormal, onCompleteParams: [$('#toolBox')]});

  TweenLite.to(".asapReg", 1, { delay: d + .5, color: "red", fontSize: "+=50", onComplete:returnTextToNormal, onCompleteParams: [d]});

  TweenLite.to(".greenText", 1, {color: "blue", onComplete:returnOtherTextToNormal});
}

function returnWeightLifter() {
  TweenLite.to($('#weightLifter'), 3, {x: 100, y: 700, scale: 3, rotationX: 0, onComplete:returnWeightLifter})
}

function returnToNormal(obj) {
  if (obj) {
  TweenLite.to($('#toolBox'), 1, {x: 0, y: 0, scale: 1});
  }
}

function returnTextToNormal(delay) {
  TweenLite.to('.asapReg', 1, { delay: delay, color: 'green', fontSize: "-=50"})
}

function returnOtherTextToNormal() {
  TweenLite.to(".greenText", 1, {color: "yellow"});

}