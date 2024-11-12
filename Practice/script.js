// gsap.to("#box1 #box", {
//     x:500,
//     duration:2,
//     delay:1,
//     repeat:-1,
//     yoyo:true,
//     rotate:360,
//     borderRadius:"50%",
// } )

// gsap.to(".title_nhi" , {
//     color:'red',
//     scale:1.5
// })

// gsap.to("#box2 #ladle", {
//     transform:"translateX(-240%)",
//     scrollTrigger:{
//          trigger:'#box2',
//          scroller:'body',
//          markers:true,
//          start:'top 0%',
//          end:'top -100%',
//          scrub:2,
//          pin:true
//     }
// } )

// var initialPath = `M 10 100 Q 700 100 1500 100`

// var finalPath = `M 10 100 Q 700 100 1500 100`

//  var string = document.querySelector('#string')

//  string.addEventListener('mousemove', function(val){

//     path = `M 10 100 Q ${val.x} ${val.y} 1500 100`

//     gsap.to("svg path", {
//         attr:{d:path},
//         duration:0.3,
//         ease:'power3.out'
//     })

//  });

//  string.addEventListener('mouseleave', function(){

//     gsap.to("svg path", {
//         attr:{d:finalPath},
//         duration:1.5,
//         ease:'elastic.out(2)'
//     })
//  })

// var box = document.querySelector('#box3');

// var cursor = document.querySelector('#cursor');

// var image = document.querySelector('#image');

// box.addEventListener('mousemove', function(val){

//       gsap.to(cursor, {
//         x:val.x,
//         y:val.y,
//         ease:'back.out',
//         duration:1
//       })
// });

// image.addEventListener('mouseenter', function(){

//   gsap.to(cursor, {
//     scale:2,
//     backgroundColor:'yellow',
//     })
// });

// image.addEventListener('mouseleave', function(){
//   console.log("Entered in Image box")

//   gsap.to(cursor, {
//     scale:1,
//     backgroundColor:'white',
//     })
// });

// var menu = document.querySelector("#nav i");
// var close = document.querySelector("#rightCard i");

// var tl = gsap.timeline();

// tl.to("#rightCard", {
//   right: "0",
//   duration: .6,
// });

// tl.from("#rightCard h4", {
//   x: 150,
//   duration: 0.6,
//   stagger: 0.26,
//   opacity: 0,
// });

// tl.from("#rightCard i", {
//   opacity: 0,
// });

// tl.pause();

// menu.addEventListener("click", function(){

//   tl.play();
// });

// close.addEventListener("click", function(){

//   tl.reverse();
// });




function breakText(){
  var h1 = document.querySelector("#main h1");

  var text = h1.textContent;
  
  var splittedText = text?.split("");
  
  var val = "";
  
  var middleValue = Math.floor(splittedText.length/2)
  
  splittedText.forEach( function(ele, index){
    
    if (index<middleValue) {
      
      val += `<span class = "start" >${ele}</span>`
    } else {
      val += `<span class = "end" >${ele}</span>`
    }
  } );
  
  h1.innerHTML = val
}

breakText()

gsap.from("h1 .start",{
       y:100,
       stagger:.15,
       opacity:0,
       duration:1,
       delay:.5
});

gsap.from("h1 .end",{
  y:100,
  stagger:-.15,
  opacity:0,
  duration:1,
  delay:.5
});
