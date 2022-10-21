var but = document.getElementById("but");
var box = document.querySelector(".box");

var colors = ["red","green","blue"];
var i = 0;

but.onclick = function (){
    box.style.backgroundColor = colors[i]
    i++
    if(i==3){
        i=0
    }

    // if (i<2){
    //     i++;
    // }else{
    //     i=0;
    // }
}