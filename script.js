var tl=gsap.timeline();

tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.8,
    stagger:0.2,
    duration:0.3
})

tl.from("h1",{
    x:-100,
    opacity:0,
    delay:0.4,
    stagger:0.3,
    duration:0.2
})

tl.from("img",{
    x:200,
    opacity:0,
    rotate:30,
    delay:0.3,
    stagger:0.6,
    duration:0.5
})

var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x -100+"px"
    blur.style.top=dets.y -100+"px"
    
    

})