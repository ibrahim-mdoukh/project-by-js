let myimg = document.getElementById("slideShow");
let imges = ["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png"];
var i = 0;
function slideShow (){
    // console.log("iii")
    myimg.setAttribute("src", imges[i]);
    i++;
    // نفذ بعد 2 ثانية
    if (i > imges.length-1){
        i=0;
    }
    setTimeout(function(){
        slideShow ()
    } , 2000);
}

slideShow ()

// let myImage = document.getElementById("slideshow");
// let images = ["images/1.jpg", "images/2.png", "images/3.jpg", "images/4.jpg"];
// let i = 0;

// function slideshow() {
//     myImage.setAttribute('src', images[i]); // images[2]

//     if(i == images.length - 1) {
//         i = 0;
//     } else {
//         i++; // i = 2
//     }

//     setTimeout(function() {
//         slideshow();
//     }, 2000)
// }

// slideshow();
