var but = document.querySelector(".but");
but.addEventListener("click" , changcolor);

function changcolor(){
    document.body.style.backgroundColor = "#" +  Math.random().toString(16).slice(2,8);
}
